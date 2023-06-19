import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

const { Schema } = mongoose;

const customerHistorySchema = new Schema({
customerId: {
type: ObjectId,
required: true
},
achat: [
{
rnames: {
type: String,
required: true
}}],
timestamp: {
type: Date
}
});

const CustomerHistory = mongoose.model('CustomerHistory', customerHistorySchema);

export default CustomerHistory;