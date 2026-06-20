import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AnalyticsEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  continentCode!: string;

  @Column()
  countryCode!: string;

  @Column()
  cityName!: string;

  @Column()
  visits!: number;
}
