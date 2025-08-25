import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    cover_image: null,
  });

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${id}/`, {
        headers: {
          Authorization: "Token 62daf00eddb65b82be41aa8be55d6e71bfa6afbd",
        },
      })
      .then((res) => {
        setFormData({
          title: res.data.title,
          author: res.data.author,
          genre: res.data.genre,
          description: res.data.description,
          cover_image: null,
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cover_image") {
      setFormData((prev) => ({ ...prev, cover_image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    axios
      .put(`http://127.0.0.1:8000/api/books/${id}/`, data, {
        headers: {
          Authorization: "Token 62daf00eddb65b82be41aa8be55d6e71bfa6afbd",
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => navigate("/books"));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" required />
        <input name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <input type="file" name="cover_image" onChange={handleChange} />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;

