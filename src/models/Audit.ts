import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('audit')
class Audit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  table: string;

  @Column()
  changes: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Audit;
