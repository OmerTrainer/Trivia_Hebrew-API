import * as express from "express";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/User";
import { createUserRouter } from "./routes/create_user";

const app = express();

export const main = async () => {
  try {
    const dbConnection: DataSourceOptions = {
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: 'postgres',
      password: "2131",
      database: 'Trivia_Hebrew',
      entities: [User],
      synchronize: true,
    };
    const dataSourceConnection =  new DataSource(dbConnection);
    await dataSourceConnection.initialize().then(connection =>{

      app.use(express.json());
      app.use(createUserRouter);

      console.log("Connected db Postgres");
      app.listen(3000, () => {
        console.log('running on port 3000')
      })
    })
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to db");
  }
};

main();
