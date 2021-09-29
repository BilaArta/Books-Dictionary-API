const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const bookSchema = Schema({

    title:{
        type: String,
        required: true,
    },

    describe:{
        type: String,
        required: true,
    },

    book_image: {
        type: String,
        required: false,
    },

    author:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = Book = mongoose.model("Book", bookSchema);