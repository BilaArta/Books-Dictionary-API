const BookService = require("../services/bookServices");

module.exports = class Book{

   static async apiGetAllBooks(req, res, next){
       try {
         const books = await BookService.getAllBooks();
         if(!books){
            res.status(404).json("There are no books published yet!")
         }
         res.json(books);
       } catch (error) {
          res.status(500).json({error: error})
       }

   }

   static async apiGetBookById(req, res, next){
      try {
         let id = req.params.id || {};
         const book = await BookService.getBookbyId(id);
         res.json(book);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateBook(req, res, next){
      try {
         const createdBook =  await BookService.createBook(req.body);
         res.json(createdBook);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiUpdateBook(req, res, next){
      try {
         const comment      = {}
         comment.title      = req.body.title;
         comment.describe   = req.body.describe;
         comment.book_image = req.body.book_image;
         comment.author     = req.body.author;

         const updatedBook = await BookService.updateBook(comment);

         if(updatedBook.modifiedCount === 0){
            throw new Error("Unable to update Book, error occord");
         }

         res.json(updatedBook);

      } catch (error) {
         res.status(500).json({error: error});
      }
   }

   static async apiDeleteBook(req, res, next){
         try {
            const bookId = req.params.id;
            const deleteResponse =  await BookService.deleteBook(bookId)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

}