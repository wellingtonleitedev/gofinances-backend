import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const balance = { income: 0, outcome: 0, total: 0 };

    const transactions = await this.find();

    return transactions.reduce((accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.value;
      } else {
        accumulator.outcome += transaction.value;
      }

      accumulator.total = accumulator.income - accumulator.outcome;

      return accumulator;
    }, balance);
  }
}

export default TransactionsRepository;
