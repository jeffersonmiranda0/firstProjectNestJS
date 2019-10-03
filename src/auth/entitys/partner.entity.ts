import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Partner {
  @PrimaryGeneratedColumn()
  idParthner: number;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;
}
