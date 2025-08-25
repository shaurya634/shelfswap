import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import UploadBook from "./pages/UploadBook";
import BooksList from "./pages/BooksList";
import Navbar from "./components/Navbar";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/books" element={<BooksList />} />
      </Routes>
    </Router>
  );
}

export default App;

