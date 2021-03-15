import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdUnitEntity {
  // for primary key
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  websiteUrl: string;

  @Column()
  adUnitName: string;

  @Column()
  divName: string;

  @Column()
  adUnitPathId: string;

  @Column()
  adUnitSize: string;
}
