import User from '../models/profiles.js';
import jwt from 'jsonwebtoken';
import mail from '../utils/mail.js';

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    const token = createToken(user._id);
    console.log(token);
    const role = user.role;
    res.status(200).json({ username, token , role});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function register(req, res) {
  const { email, password , phonnumber , localisation , username} = req.body;
  const role = "customer" ; 
  console.log(req.body);
  try {
    const user = await User.signup(email, password , role , phonnumber , localisation , username);
    const token = createToken(user._id);
    const from = 'hamai.ismail.dz@gmail.com';
    const subject = 'welcome';
    const text = 'thank you for registering';
    mail.sendEmail(from, email, subject, text);
    res.status(200).json({ email, token });
  } catch (error) {
    console.log('error here');
    res.status(400).json({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id; 
    await User.findByIdAndDelete(id);
    res.send('User has been deleted.');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export { register, getAllUsers, login, deleteUser };
