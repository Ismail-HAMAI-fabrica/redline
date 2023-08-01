import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
 
const { Schema } = mongoose;

const facturSchema = new Schema({
orderid: { type: ObjectId, required: true },
recipeid: { type: ObjectId, required: true },
addres: { type: String, required: true },
phonnumber: { type: String, required: true },
items: [
{
mult: { type: Number, required: true },
price: { type: Number, required: true }
}
],
tax: { type: Number, required: true },
total: { type: Number, required: true }
});

const Factur = mongoose.model('Factur', facturSchema);
export default Factur;