const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  ranking: String,
  score: Number,
  dailyGoal: Number
});
exports.Users = mongoose.model('Users', userSchema);
