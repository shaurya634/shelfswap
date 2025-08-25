import React, { useState } from "react";
import { BookOpen, Upload, Image, User, Tag, FileText, CheckCircle, AlertCircle } from "lucide-react";

function UploadBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });
  const [coverImage, setCoverImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call (replace with actual axios call)
    try {
      // Mock delay for demonstration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      showNotification('success', 'Book uploaded successfully!');
      setFormData({ title: "", author: "", genre: "", description: "" });
      setCoverImage(null);
      setImagePreview(null);
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      showNotification('error', 'Error uploading book. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Book
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Share your literary creation with the world. Fill in the details below to get started.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="space-y-8">
              {/* Cover Image Upload */}
              <div className="space-y-4">
                <label className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                  <Image className="w-5 h-5 mr-2 text-indigo-600" />
                  Cover Image
                </label>
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="border-2 border-dashed border-indigo-300 rounded-2xl p-8 text-center hover:border-indigo-400 hover:bg-indigo-50/50 transition-all duration-300 cursor-pointer">
                        <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">
                          {coverImage ? coverImage.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  {imagePreview && (
                    <div className="w-32 h-48 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                      <img
                        src={imagePreview}
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700">
                    <BookOpen className="w-4 h-4 mr-2 text-indigo-600" />
                    Book Title *
                  </label>
                  <input
                    name="title"
                    placeholder="Enter the book title"
                    onChange={handleChange}
                    value={formData.title}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-gray-700">
                    <User className="w-4 h-4 mr-2 text-indigo-600" />
                    Author *
                  </label>
                  <input
                    name="author"
                    placeholder="Enter author name"
                    onChange={handleChange}
                    value={formData.author}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                  <Tag className="w-4 h-4 mr-2 text-indigo-600" />
                  Genre
                </label>
                <input
                  name="genre"
                  placeholder="e.g., Fiction, Mystery, Romance"
                  onChange={handleChange}
                  value={formData.genre}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-gray-700">
                  <FileText className="w-4 h-4 mr-2 text-indigo-600" />
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Tell us about your book..."
                  onChange={handleChange}
                  value={formData.description}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none bg-white/80 backdrop-blur-sm"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Upload Book</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notification */}
        {notification && (
          <div className={`fixed top-8 right-8 max-w-sm w-full bg-white rounded-xl shadow-2xl border-l-4 ${
            notification.type === 'success' ? 'border-green-500' : 'border-red-500'
          } p-4 transform transition-all duration-500 z-50`}>
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
              ) : (
                <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
              )}
              <div>
                <p className={`font-semibold ${
                  notification.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {notification.type === 'success' ? 'Success!' : 'Error!'}
                </p>
                <p className="text-gray-600 text-sm">{notification.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadBook;
