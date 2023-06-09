import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Connectie MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to the database!");
});

// schema
const UserInfoSchema = new mongoose.Schema({
  rainAmount: Number,
  totalRainCollected: Number,
  waterDrains: Number,
  rainBarrels: Number,
  roofSurface: Number,
  rainBarrelEmptied: Boolean,
  nextRainDay: String,
  fullRainBarrelDay: String,
  nextRainAmount: Number,
});

// Model Definiëren
const UserInfo = mongoose.model("UserInfo", UserInfoSchema);

export { UserInfo };
