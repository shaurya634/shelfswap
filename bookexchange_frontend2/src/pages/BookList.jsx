import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://127.0.0.1:8000/api/books/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>All Books</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {books.map((book) => (
            <div key={book.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "10px" }}>
              {book.cover_image && (
                <img
                  src={book.cover_image}
                  alt="Cover"
                  style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "1rem" }}
                />
              )}
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookList;

