import jwt from 'jsonwebtoken';
import User from '../models/profiles.js';

export async function VerifyToken(req, res, next) {
  const { authorization } = req.headers;


  if (!authorization) {
    return res.status(401).json({ message: 'Authorisation token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Invalid token' });
  }
}

export async function isAdmin(req, res, next) {
  if (!req.user) {
    return res.status(400).send({
      message: 'You must sign in before',
    });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== 'admin') {
    console.log(user.role);
    return res.status(403).send({
      message: 'Not authorized, you should be an admin!',
    });
  } 
  next();
}

export async function isCustomer(req, res, next) {
  if (!req.user) {
    return res.status(400).send({
      message: 'You must sign in before',
    });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== 'customer') {
    return res.status(403).send({
      message: 'Not authorized, you should be a reader!',
    });
  }
  next();
}
