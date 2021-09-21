import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {

  constructor(
    @InjectModel(Account) private accountEntity: typeof Account
  ) { }

  create(createAccountDto: CreateAccountDto) {
    return this.accountEntity.create(createAccountDto);
  }

  findAll() {
    return this.accountEntity.findAll();
  }

  findOne(id: number) {
    return this.accountEntity.findByPk(id, {
      rejectOnEmpty: true
    });
  }
}
