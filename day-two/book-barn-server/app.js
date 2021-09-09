const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const books = [
  { name: `Harry Potter and the Philosopher's Stone`, isbn: '1234' },
  { name: `The Hobbit`, isbn: '3421' },
  { name: `The Eye of the World - The Wheel of Time Book 1`, isbn: '3215' }
];

// passes |
app.get('/api/books', (req, res) => {
  res.json(books);
});

// passes |
app.post('/api/books', (req, res) => {
  const name = req.body.name;
  const isbn = req.body.isbn;

  const book = { name: name, isbn: isbn };
  books.push(book);

  res.json({ success: 'book has been successfully added' });
});

app.listen(PORT, () => {
  console.log('Server is running...');
});
