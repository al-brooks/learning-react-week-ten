const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const books = [
  {
    name: `Harry Potter and the Sorcerer's Stone`,
    genre: 'Fantasy',
    publisher: 'Scholastic Inc',
    year: '1997',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg'
  },
  {
    name: `The Hobbit`,
    genre: 'Fantasy',
    publisher: 'Houghton Mifflin',
    year: '1937',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg'
  },
  {
    name: `The Eye of the World - The Wheel of Time Book 1`,
    genre: 'Fantasy',
    publisher: 'Tor Books',
    year: '1990',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337818095l/228665.jpg'
  },
  {
    name: `To Kill A Mockingbird`,
    genre: 'Southern Gothic',
    publisher: 'Harper Perennial Modern Classics',
    year: '1960',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'
  },
  {
    name: `The Great Gatsby`,
    genre: 'Tragedy',
    publisher: 'Scribner',
    year: '1925',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg'
  },
  {
    name: 'Dune',
    genre: 'Sci-Fi',
    publisher: 'Ace Books',
    year: '1965',
    imageUrl:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg'
  }
];

// passes |
app.get('/api/books', (req, res) => {
  res.json(books);
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
  books.push(book);

  res.json({ success: 'book has been successfully added' });
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
