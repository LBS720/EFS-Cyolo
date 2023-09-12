import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;

  const MONGO_URI = `MONGO_URI=mongodb://${USERNAME}:${PASSWORD}0dqv-shard-00-00.xs5kdaa.mongodb.net:27017,ac-ily0dqv-shard-00-01.xs5kdaa.mongodb.net:27017,ac-ily0dqv-shard-00-02.xs5kdaa.mongodb.net:27017/?replicaSet=atlas-u6ixst-shard-0&ssl=true&authSource=admin`;
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
