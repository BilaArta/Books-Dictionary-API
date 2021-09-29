
const express = require('express');
const {apiGetAllBooks, apiGetBookById, apiCreateBook, apiUpdateBook, apiDeleteBook} = require('../controllers/booksController'); 

const router = express.Router();


router.get("/", apiGetAllBooks);
router.post("/", apiCreateBook);
router.get("/:id", apiGetBookById);
router.put("/:id", apiUpdateBook);
router.delete("/:id", apiDeleteBook);

module.exports = router;