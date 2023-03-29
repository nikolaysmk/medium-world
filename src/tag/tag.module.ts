import { Model, Column, Table } from 'sequelize-typescript';

@Table({ tableName: 'tags' })
export class Tag extends Model<Tag> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ unique: true })
  name: string;
}
