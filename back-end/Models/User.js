const mongoose = require('mongoose');
const {isEmail} = require('validator')
const bcrypt = require('bcrypt')
const loginUser = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        validate:[isEmail,'Enter Valid Email'],
    },
    password:{
        type:String,
        required:true
    }
})
loginUser.pre('save',async function(next){
    // if(!isStrongPassword(this.password)){
    //     throw Error('Use Storng Password')
    // }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt)
    
    next();
})

loginUser.statics.login = async function(email,password){
    if(!email){
        throw Error('Enter Email')
    }
    if(!password){
        throw Error('Enter Password')
    }
    const user = await this.findOne({email})
    if(user){
        const passCompare = await bcrypt.compare(password,user.password);
        console.log(passCompare)
        if(passCompare){
            return user
        }
        throw Error('Incorrect Password');
    }
    throw Error('Email Is Not Found.');
}


module.exports = mongoose.model('User',loginUser)