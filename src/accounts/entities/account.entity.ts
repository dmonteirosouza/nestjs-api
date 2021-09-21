import { Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ToNumber } from "../../common/db/to-number.decorator";

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  id: string;

  @Column({
    allowNull: false
  })
  name: string;

  @ToNumber
  @Default(0)
  @Column({
    allowNull: false,
    type: DataType.DECIMAL(10, 2)
  })
  balance: string;

  @Column({
    allowNull: false
  })
  subdomain: string;
}
