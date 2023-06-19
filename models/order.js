import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
const { Schema } = mongoose;

const orderSchema = new Schema({
  profileid: {
    type:ObjectId,
    required:true
  },
  recipeid: {
    type:ObjectId,

    required: true
  },
  price: {
    type: Number,
    required: true
  },
  mult: {
    type: Number,
    required: true
  },
  addedAt: {
    type: Date,
    default: Date.now
  } 
});

const Order = mongoose.model('Order', orderSchema);

export default Order;