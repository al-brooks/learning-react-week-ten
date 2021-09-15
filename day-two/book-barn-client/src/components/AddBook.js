import { useState } from 'react';

function AddBook(props) {
  let [book, setBook] = useState({});

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Add Book</h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="genre"
        name="genre"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="publisher"
        name="publisher"
        onChange={handleChange}
      />
      <input type="text" placeholder="year" name="year" />
      <input
        type="text"
        placeholder="imageUrl"
        name="imageUrl"
        onChange={handleChange}
      />
      <button>Add</button>
    </div>
  );
}

export default AddBook;
