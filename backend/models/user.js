var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var User = new Schema({
  firstName: {
    type: String,
    required: [true, "name is required"],
    minlength: [2, "name can not less then two chars"],
    maxlength: [20, "name can not greater then 20 char"],
    lowercase: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, " lastName is required"],
    minlength: [2, "lastName can not less then two chars"],
    maxlength: [20, "lastName can not greater then 20 char"],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    require: [true, "email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please fill valid email address`,
    ],
  },
  password: {
    type: String,
    trim: true,
    min: [5, "password must be atleast 5 chars"],
    required: [true, "password is required"],
  },
  gender: String,
  photo: String,
  Countries: String,
  hobbies: String,
});

var User = mongoose.model("user", User);
module.exports = User;
