const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      uniqueCaseInsensitive: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false, // Default value is false (not an admin)
    },
    savedDemos: [{demotitle: String, date: Date, time: String, user: ObjectId}],
    savedEvents: [{title: String, date: Date, time: String, description: String, image: String, user: ObjectId}],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// When we query a user, we'll also get another field called `eventCount` with the number of saved events we have
userSchema.virtual('eventCount').get(function () {
  return this.savedEvents.length;
});

// When we query a user, we'll also get another field called `demoCount` with the number of saved demos we have
userSchema.virtual('demoCount').get(function () {
  return this.savedDemos.length;
});

const User = model('User', userSchema);

module.exports = User;
