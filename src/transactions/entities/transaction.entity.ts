import { BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Account } from "src/accounts/entities/account.entity";

export enum TransactionCategory {
    CATEGORY1 = 'category1',
    CATEGORY2 = 'category2'
}

export const TransactionCategoryList: TransactionCategory[] = Object.values(TransactionCategory);

export enum TransactionType {
    CREDIT = 'credit',
    DEBIT = 'debit'
}

export const TransactionTypeList: TransactionType[] = Object.values(TransactionType);

@Table({
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})
export class Transaction extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    id: string;

    @Column({
        allowNull: false
    })
    payment_date: Date;

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false
    })
    description: string;

    @Column({
        allowNull: false
    })
    category: TransactionCategory;

    @Column({
        allowNull: false,
        type: DataType.DECIMAL(10, 2)
    })
    amount: number;

    @Column({
        allowNull: false
    })
    type: TransactionType;

    @ForeignKey(() => Account)
    @Column({
        allowNull: false,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4
    })
    account_id: string;

    @BelongsTo(() => Account)
    account: Account;
}