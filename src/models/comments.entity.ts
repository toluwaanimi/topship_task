import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('movie_comments')
export class Comments {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public movieId: number;

  @Column()
  public comment: string;

  @Column()
  public ipAddress: string;

  @Column()
  public createdDate: string;

  @Column()
  public createdTime: string;
}
