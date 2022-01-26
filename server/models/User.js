const mongoose = require("mongoose");

// const CurrentBooksSchema = new mongoose.Schema([
//   {
//     title: { type: String, required: true },
//   },
// ]);
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, max: 20, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 5 },
    currentBooks: {type:Array},

    // profilePicture: { type: String, default: "" },
    // followers:{type:Array, default:[]},
    // following:{type:Array, default:[]},
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema); //constructors compiled from Schema definitions. An instance of a model is called a document.
