import path from 'path';
import fs from 'fs';
import csv from 'csv-parse';
import { getRepository, In, getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import upload from '../config/upload';
import Category from '../models/Category';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface TransactionImportDto {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
}

class ImportTransactionsService {
  async execute(filname: string): Promise<Transaction[]> {
    const transactions: TransactionImportDto[] = [];
    let categories: string[] = [];

    const csvParse = csv({ delimiter: ', ', from_line: 2 });
    const importFilePath = path.join(upload.directory, filname);
    const importFileStream = fs.createReadStream(importFilePath);
    const importFileParsed = importFileStream.pipe(csvParse);

    importFileParsed.on('data', async row => {
      const [title, type, value, category] = row;

      const transaction = {
        title,
        type,
        value,
        category,
      } as TransactionImportDto;

      categories.push(category);
      transactions.push(transaction);
    });

    await new Promise(resolve => importFileParsed.on('end', resolve));

    const categoryRepository = getRepository(Category);
    let categoriesExist = await categoryRepository.find({
      where: In(categories),
    });

    const categoriesExistTitle = categoriesExist.map(
      categoryExist => categoryExist.title,
    );

    categories = categories.filter(
      (category, index, self) =>
        !categoriesExistTitle.includes(category) &&
        self.indexOf(category) === index,
    );

    const categoriesCreated = categoryRepository.create(
      categories.map(title => ({
        title,
      })),
    );

    await categoryRepository.save(categoriesCreated);

    categoriesExist = [...categoriesExist, ...categoriesCreated];

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionsCreated = transactionsRepository.create(
      transactions.map(transaction => ({
        title: transaction.title,
        type: transaction.type,
        value: transaction.value,
        category: categoriesExist.find(
          item => item.title === transaction.category,
        ),
      })),
    );

    await transactionsRepository.save(transactionsCreated);

    await fs.promises.unlink(importFilePath);

    return transactionsCreated;
  }
}

export default ImportTransactionsService;
