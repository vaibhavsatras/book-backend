const { name } = require('ejs')
const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({

    name: String,
    title: String,
    catageory: String,
    price: String,
    image: String

})

const booksModel = mongoose.model('books',booksSchema)

module.exports = booksModel