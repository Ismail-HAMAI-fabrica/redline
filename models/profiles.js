import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true, 
        unique : true
    },
    password: {
        type:String,
        required:true
    }, 
    email: {
        type:String,
    require:true
},
    firstName: {
        type:String,
    require:true
},
    lastName: {
        type:String,
    require:true
}
});
const User = model('User', userSchema);
export default User;