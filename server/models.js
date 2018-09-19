
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/products',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [4, "Title needs to be longer than 3 characters!"]
        
    },
    price: {
        type: Number,
        required: [true, "Need to include price!"]
    },
    url: {
        type: String,
        default: ""
    }


},{timestamps:true})



module.exports = mongoose.model('Product', ProductSchema);