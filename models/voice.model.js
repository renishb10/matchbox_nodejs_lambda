const mongoose = require('../data/db')();

const { Schema } = mongoose;

const voiceModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'female',
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: Date,
    required: false,
    default: new Date().toISOString(),
  },
});

// Hooks goes here

// Indexing goes here
voiceModel.index({ email: 1 });

module.exports = mongoose.model('voices', voiceModel);
