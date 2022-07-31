import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import "dotenv/config";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/Users.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

app.listen("4444", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("app is running");
  }
});

try {
  mongoose.connect(process.env.MONGO_DB_KEY);
  console.log("db ok");
} catch (err) {
  console.log("error", err);
}

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      "secret123",
      { expiresIn: "30d" }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      token,
      ...userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Cant register",
    });
  }
});
