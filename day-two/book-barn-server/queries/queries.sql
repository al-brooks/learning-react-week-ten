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
('Harry Potter and the Sorcerer"s Stone', 'Fantasy', 'Scholastic Inc', 1997, 'https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9780590353403/primary/renditions/700?useMissingImage=true'),
('The Hobbit', 'Fantasy', 'Houghton Mifflin', 1937, 'https://g.christianbook.com/g/slideshow/6/60309/main/60309_1_ftc.jpg'),
('The Eye of the World - The Wheel of Time Book 1', 'Fantasy', 'Tor Books', 1990, 'https://images-na.ssl-images-amazon.com/images/I/91cJ0-MXtGL.jpg'),
('To Kill A Mockingbird', 'Southern Gothic', 'Harper Perennial Modern Classics', 1960,'https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg'),
('The Great Gatsby', 'Tragedy', 'Scribner', 1925, 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg'),
('Dune', 'Sci-Fi','Ace Books', 1965,'https://images-na.ssl-images-amazon.com/images/I/A1u+2fY5yTL.jpg'),
('Harry Potter and the Prisoner of Azkaban','Fantasy','Scholastic Inc.',2004,'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg')


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


ALTER TABLE bb_cart
ADD COLUMN is_deleted BOOLEAN

SELECT
COUNT(cart_id) AS "num_books"
FROM bb_cart

SELECT
cart_id,
book_id
FROM bb_cart
WHERE is_deleted = false

UPDATE bb_cart 
SET is_deleted = true
WHERE cart_id = 1

update bb_books set name = 'Harry Potter and the Sorcerer''s Stone' where book_id = 1