const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const demoSchema = new Schema({
  demotitle: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
},
{
  toJSON: {
    virtuals: true,
  },
});

const Demo = model('Demo', demoSchema);

module.exports = Demo;