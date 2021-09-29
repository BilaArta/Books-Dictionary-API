const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books')
// const {MongoClient} = require('mongodb');
const mongoose = require('mongoose')

const config = require('config')
const dbURI = config.get('mongoURI');


const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })    
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.use('/api/v1/book/', booksRoutes)

const PORT = process.env.PORT || config.get('port') || 8000
app.listen(PORT, () => 
    console.log("server running on port : " + PORT)
    );