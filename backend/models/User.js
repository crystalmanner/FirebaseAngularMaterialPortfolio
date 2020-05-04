const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  role: {
    type: Number,
    default: 0 // 0: user, 99: admin
  },
  phone: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  allowed: {
    type: Boolean,
    default: false
  },
  properties: {
    type: Object
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
