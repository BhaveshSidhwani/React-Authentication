import { MongoClient } from "mongodb";

let client;

export const initializeDbConnection = async () => {
  client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  console.log("DB connected");
};

export const getDbConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
