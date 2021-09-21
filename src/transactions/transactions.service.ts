import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(
    @InjectModel(Transaction) private transactionEntity: typeof Transaction
  ) { }

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionEntity.create(createTransactionDto);
  }

  findAll() {
    return this.transactionEntity.findAll();
  }
}
