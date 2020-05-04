const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  released_on: {
    type: Date,
    trim: true,
    required: true
  }
});

module.exports = mongoose.model('Project', ProjectSchema);