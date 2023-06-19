import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  localisation: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonnumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    required: true,
  },
});

userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error('All fields are required!');
  }

  const user = await this.findOne({ username });

  if (!username) {
    throw Error('Incorrect username');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};

userSchema.statics.signup = async function (email, password, role , phonnumber , localisation , username) {
  if (!email || !password || !role || !phonnumber || ! localisation || ! username) {
    throw Error('All fields are required!');
  }

  if (!validator.isEmail(email)) {
    throw Error('Invalid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('You should send a strong password!');
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('Email exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash, role , phonnumber , localisation , username});

  return user.toObject({ getters: true, versionKey: false, transform: function (doc, ret) {
    delete ret.password;
  } });
};

const User = mongoose.model('User', userSchema);
export default User;
