-- create users table
CREATE TABLE bb_users (
  	user_id SERIAL PRIMARY KEY,
  	first_name VARCHAR(30),
  	last_name VARCHAR(30),
  	user_name TEXT UNIQUE,
  	user_email TEXT UNIQUE,
  	user_password VARCHAR(300)
  )

CREATE TABLE bb_books (
	book_id SERIAL PRIMARY KEY,
    name VARCHAR (200),
    genre VARCHAR (20),
    publisher VARCHAR (50),
    year INTEGER,
    imageUrl TEXT 
)

CREATE TABLE bb_cart (
	cart_id SERIAL PRIMARY KEY,
  	book_id INTEGER REFERENCES bb_books (book_id) ON DELETE CASCADE,
  	user_id INTEGER REFERENCES bb_users (user_id) ON DELETE CASCADE
)

SELECT
books.name,
books.genre,
books.imageurl
FROM bb_cart AS cart
INNER JOIN bb_books AS books
ON cart.book_id = books.book_id

INSERT INTO bb_cart (book_id) 
VALUES 
(1), 
(2),
(1)

INSERT INTO bb_books (name, genre, publisher, year, imageURL)
VALUES
('Harry Potter and the Sorcerer"s Stone', 'Fantasy', 'Scholastic Inc', 1997, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg'),
('The Hobbit', 'Fantasy', 'Houghton Mifflin', 1937, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg'),
('The Eye of the World - The Wheel of Time Book 1', 'Fantasy', 'Tor Books', 1990, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1337818095l/228665.jpg'),
('To Kill A Mockingbird', 'Southern Gothic', 'Harper Perennial Modern Classics', 1960,'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'),
('The Great Gatsby', 'Tragedy', 'Scribner', 1925, 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg'),
('Dune', 'Sci-Fi','Ace Books', 1965,'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg')


-- Added column to users table
ALTER TABLE users
ADD COLUMN user_email TEXT UNIQUE

-- Delete all test users from users table
DELETE FROM users

UPDATE books
SET column_value = ''
WHERE id = ''

-- added column to indicate whether a user is a test user or not
ALTER TABLE users
ADD COLUMN test_user BOOLEAN DEFAULT FALSE

-- I updated the column values to true since all users at this point are test users
UPDATE users SET test_user = true