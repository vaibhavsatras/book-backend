const booksModel = require("../model/booksSchema")

const getBooks = (req,resp)=>{

    const books = booksModel.find()
    
    books.then((data)=>{

        return resp.json(data)

    })

}

module.exports = {
    getBooks
}