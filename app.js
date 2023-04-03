import  express   from 'express';
import mongoose from 'mongoose';

const app=express();

mongoose.set('strictQuery', true);


 


mongoose.connect("mongodb+srv://ismailkun:madarakun0123@hamaiismail.nqf3s2v.mongodb.net/?retryWrites=true&w=majority").then(()=>{
app.listen(3000, ()=>{console.log('http://localhost:3000')});
}); 