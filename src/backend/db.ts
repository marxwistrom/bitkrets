import * as mongoDB from "mongodb";
import { MongoMemoryServer } from "mongodb-memory-server";
import type { BlogPost, User } from "../types/bitkrets";

// not so useful info: https://www.mongodb.com/resources/products/compatibilities/using-typescript-with-mongodb-tutorial#adding-schema-validation-with-the-mongodb-nodejs-driver

export const collections: {
  // https://www.mongodb.com/docs/drivers/node/current/typescript/#working-with-the-_id-field
  blogPosts?: mongoDB.Collection<mongoDB.OptionalId<BlogPost>>;
  users?: mongoDB.Collection<mongoDB.OptionalId<User>>;
} = {};

export async function connectToDatabase(isTesting: boolean) {
  // if test use mongo-memory-server
  let connectionString;
  if (isTesting) {
    const mongod = await MongoMemoryServer.create({
      instance: {
        dbName: "bitkrets",
      },
    });
    connectionString = mongod.getUri();
  } else {
    connectionString = "mongodb://localhost:27017"; // process.env.MONGODB_CONNECTION_STRING
  }
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);
  await client.connect();
  const db: mongoDB.Db = client.db("bitkrets");
  const blogCollection = db.collection<mongoDB.OptionalId<BlogPost>>("posts");
  const userCollection = db.collection<mongoDB.OptionalId<User>>("users");

  collections.blogPosts = blogCollection;
  collections.users = userCollection;
  console.log(
    "succefully connected to database with mongoDB client and app collections..."
  );
}