import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { runSeeders, SeederOptions } from 'typeorm-extension';

// for migration

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env.local' });
} else {
  dotenv.config();
}
const config: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  migrationsRun: true,
  entities: [__dirname + '/../../../**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../../**/migrations/*{.ts,.js}'],
  seeds: [__dirname + './../../../seeds/**/*{.ts,.js}'],
};

export default config;

export const AppDataSource = new DataSource(config);

(async () => {
  try {
    await AppDataSource.initialize();
    await runSeeders(AppDataSource);
    console.log('Seeders Run Completed!');
  } catch (error) {
    console.error('Error during database initialization or seeding:', error);
  }
})();
