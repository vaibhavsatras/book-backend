const express = require('express');
const { getBooks } = require('../controlers/books');
const { userAuthorization } = require('../middleware/userAuth');
const router = express.Router();

router.get('/books',getBooks)

module.exports = {

    router

}