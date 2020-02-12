
const mongoose=require('mongoose')

const Schema=mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Category'
    }
})
const Note=mongoose.model('Note',noteSchema)
module.exports=Note