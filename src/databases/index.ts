import * as config from 'config';
import { join } from 'path';
import { ConnectionOptions } from 'typeorm';
import { dbConfig } from '../interfaces/db.interface';

const { host, user, password, database, logging, ssl }: dbConfig = config.get('dbConfig');

const dbConnection: ConnectionOptions = {
  type: 'postgres',
  port: 5432,
  host: process.env.HOST ?? host,
  username: process.env.USER ?? user,
  password: process.env.PASSWORD ?? password,
  database: process.env.DATABASE ?? database,
  synchronize: true,
  logging: logging,
  ssl: ssl,
  migrationsTableName: 'migrations_table',
  entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [join(__dirname, '../**/*.subscriber{.ts,.js}')],

};

export default dbConnection;
