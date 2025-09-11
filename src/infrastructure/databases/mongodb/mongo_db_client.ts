import mongoose from "mongoose";
import { config } from "../../../config/env";

export const connect = async () => {
  try {
    const uriConnection = config.mongoUri;

    console.log("uriConnection", uriConnection);

    if (!uriConnection) {
      throw new Error("MongoDB URI not found, verify envirements variables");
    }

    console.log("Connecting to MongoDB...");

    await mongoose.connect(uriConnection, {
      dbName: "develop",
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    await closeConnection();
    throw new Error("Failed to connect to MongoDB");
  }
};

export const closeConnection = async (): Promise<void> => {
  await mongoose.disconnect();
  console.log("MongoDB connection closed");
};
