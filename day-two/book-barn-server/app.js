require('dotenv').config();
global.express = require('express');
const cors = require('cors');
const app = express();
global.fetch = require('node-fetch');
global.session = require('express-session');
const pgp = require('pg-promise')();
const connectionString = process.env.DB_CONNECT;
global.db = pgp(connectionString);
global.bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// passes |
app.get('/api/books', (req, res) => {
  db.any('SELECT* FROM bb_books')
    .then((books) => {
      res.json(books);
    })
    .catch((error) => {
      console.log(error);
    });
});

// passes |
app.post('/api/books', (req, res) => {
  const name = req.body.name;
  const genre = req.body.genre;
  const publisher = req.body.publisher;
  const year = req.body.year;
  const imageUrl = req.body.imageUrl;

  const book = {
    name: name,
    genre: genre,
    publisher: publisher,
    year: year,
    imageUrl: imageUrl
  };
  // books.push(book);

  res.json({ success: 'book has been successfully added' });
});

app.listen(process.env.PORT, () => {
  console.log('Server is running...');
});
