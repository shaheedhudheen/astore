const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // token: { type: String, default: null },
});

const User = model("User", UserSchema);

module.exports = User;
