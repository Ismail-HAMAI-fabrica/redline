import User from "../models/profiles";
import bcrypt from 'bcrypt'


export const signin = async (req,res)=>{
    const {username,password,email,firstName,lastName} = req.body;
    bcrypt.hash(password,7).then(async(password)=>{
    await user = await User.create({username,password,email,firstName,lastName});

})
    
}
    // if(username ==""||password==""||email=="" ||firstName==""||lastName=="" ){
    //     res.status(4OO).json({"you need to fill the information to precide"})
    // }else if (!/^[a-zA-Z]*$/.test(username)){
    //     res.status(400).json({"use only alphabtic username"})
    // }