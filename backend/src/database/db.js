import { connect } from "mongoose";
import { settingDotEnvDb } from "../config/config.js";

const { db } = settingDotEnvDb();

export const connectDB = async () => {
  try {
    const db = await connect(
      "mongodb://mongo:6GEFgC-GGeBH23CDCd5bfH-e5HEC6FBa@viaduct.proxy.rlwy.net:37609"
    );
    console.log("DB is connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
