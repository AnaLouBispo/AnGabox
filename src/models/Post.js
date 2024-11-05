const mongoose = require("mongoose");

const postSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true  
    },
    movieTitle:{
        type: String,
        required:true
    },
    director: {
        type: String,
        required: true
    },
    idUser:{
        type: String,
        required: true
    }
}); 
module.exports = mongoose.model("Post", postSchema);