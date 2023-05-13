const mongoose = require('mongoose')

const userData = mongoose.Schema({
    // image:{
    //     type:String,
    //     required:[true,'Insert Image File.']
    // },
    description:{
        type:String,
        required:[true,'Description Is required.']
    },
    title:{
        type:String,
        required:[true,'Title Is Required.']
    },
    link:{
        type:String,
    },
    usedTech:{
        type:[String],
        required:[true,'Please Insert The Tech.']
    }
},{timestamps:true})

module.exports = mongoose.model('Profile',userData);