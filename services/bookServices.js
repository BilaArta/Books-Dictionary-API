const Book = require("../models/books");

module.exports = class BookService{
    static async getAllBooks(){
        try {
            const allBooks = await  Book.find();
            return allBooks;
        } catch (error) {
            console.log(`Could not fetch books ${error}`)
        }
    }

    static async createBook(data){
        try {

            const newBook = {
                title: data.title,
                describe: data.describe,
                book_image: data.book_image,
                author : data.author
            }
           const response = await new Book(newBook).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getBookbyId(bookId){
        try {
            const singleBookResponse =  await Book.findById({_id: bookId});
            return singleBookResponse;
        } catch (error) {
            console.log(`Book not found. ${error}`)
        }
    }

    static async updateArticle(title, describe, book_image, author){
            try {
                const updateResponse =  await Book.updateOne(
                    {title, describe, book_image, author}, 
                    {$set: {date: new Date.now()}});

                    return updateResponse;
            } catch (error) {
                console.log(`Could not update Book ${error}` );

        }
    }

    static async deleteArticle(bookId){
        try {
            const deletedResponse = await Book.findOneAndDelete(bookId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete book ${error}`);
        }

    }
}