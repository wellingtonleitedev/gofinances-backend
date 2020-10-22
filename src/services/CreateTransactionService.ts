import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Audit from '../models/Audit';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateCategoryService from './CreateCategoryService';

interface RequestDto {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  categoryTitle: string;
}

class CreateTransactionService {
  public async execute({
    title,
    type,
    value,
    categoryTitle,
  }: RequestDto): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const auditRepository = getRepository(Audit);

    const { total } = await transactionsRepository.getBalance();

    if (type === 'outcome' && total < value) {
      throw new AppError('You do not have enought balance');
    }

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(categoryTitle);

    const transaction = transactionsRepository.create({
      title,
      type,
      value,
      category_id: category.id,
    });

    const changes = {
      ...transaction,
      _status: 'created',
    };

    const audit = auditRepository.create({
      table: 'transactions',
      changes: JSON.stringify(changes),
    });

    await auditRepository.save(audit);
    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
