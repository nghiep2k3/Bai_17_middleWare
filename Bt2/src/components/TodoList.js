import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, updateBook, deleteBook } from "../actions/actions";
import BookForm from "./todoForm";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleUpdateBook = (updatedBook) => {
    dispatch(updateBook(updatedBook));
    setSelectedBook(null);
  };

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEditBook = (id) => {
    const book = books.find((book) => book.id === id);
    setSelectedBook(book);
  };

  return (
    <div>
      <h1>Book List</h1>
      <BookForm book={selectedBook} onSubmit={handleUpdateBook} />
      <ul>
        {books.map((book) => (
          <div key={book.id}>
            <li>{book.name}</li>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            <button onClick={() => handleEditBook(book.id)}>Edit</button>
          </div>
        ))}
      </ul>
  
    </div>
  );
};

export default BookList;