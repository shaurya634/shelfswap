import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/books/", {
      headers: {
        Authorization: "Token 62daf00eddb65b82be41aa8be55d6e71bfa6afbd",
      },
    })
    .then((res) => {
      setBooks(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching books", err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3e8ff 0%, #dbeafe 50%, #e0e7ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              border: '4px solid #e5e7eb',
              borderTop: '4px solid #7c3aed',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <span style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '24px'
            }}>📚</span>
          </div>
          <p style={{
            color: '#4b5563',
            fontWeight: '500'
          }}>Loading your amazing books...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f3e8ff 0%, #dbeafe 50%, #e0e7ff 100%)'
    }}>
      {/* Hero Header */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 50%, #4f46e5 100%)',
        paddingTop: '64px',
        paddingBottom: '80px'
      }}>
        <div style={{
          position: 'absolute',
          inset: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }}></div>
        <div style={{
          position: 'absolute',
          inset: '0'
        }}>
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            width: '80px',
            height: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '128px',
            right: '80px',
            width: '64px',
            height: '64px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '50%',
            animation: 'bounce 1s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '33%',
            width: '48px',
            height: '48px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite 0.3s'
          }}></div>
        </div>
        <div style={{
          position: 'relative',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                padding: '16px',
                backdropFilter: 'blur(4px)'
              }}>
                <span style={{
                  fontSize: '48px',
                  color: 'white'
                }}>📚</span>
              </div>
            </div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '16px',
              letterSpacing: '-0.025em',
              margin: '0 0 16px 0'
            }}>
              Your Book Collection
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#dbeafe',
              maxWidth: '672px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Discover, explore, and manage your personal library of amazing stories
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '32px'
            }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                padding: '8px 24px',
                backdropFilter: 'blur(4px)'
              }}>
                <span style={{
                  color: 'white',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>✨</span>
                  {books.length} {books.length === 1 ? 'Book' : 'Books'} in Collection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div style={{
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        {books.length === 0 ? (
          <div style={{
            textAlign: 'center',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '48px',
              maxWidth: '384px',
              margin: '0 auto'
            }}>
              <div style={{
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                width: '96px',
                height: '96px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <span style={{
                  fontSize: '48px'
                }}>📚</span>
              </div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '12px',
                margin: '0 0 12px 0'
              }}>No Books Yet</h3>
              <p style={{
                color: '#4b5563',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Your collection is waiting to be filled with amazing stories. Start by adding your first book!
              </p>
            </div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {books.map((book, index) => (
              <div
                key={book.id}
                className="book-card"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '24px',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                {/* Book Cover */}
                <div style={{
                  position: 'relative',
                  height: '256px',
                  background: 'linear-gradient(135deg, #ddd6fe 0%, #bfdbfe 100%)',
                  overflow: 'hidden'
                }}>
                  {book.cover_image ? (
                    <img
                      src={book.cover_image}
                      alt={book.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #c084fc 0%, #60a5fa 100%)'
                    }}>
                      <span style={{
                        fontSize: '64px',
                        color: 'white',
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                      }}>📚</span>
                    </div>
                  )}
                  
                  {/* Edit Button */}
                  <button
                    onClick={() => navigate(`/edit/${book.id}`)}
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      padding: '12px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.transform = 'translateY(-4px) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                      e.target.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    <span style={{
                      fontSize: '16px',
                      color: '#7c3aed'
                    }}>✏️</span>
                  </button>
                </div>

                {/* Book Details */}
                <div style={{
                  padding: '24px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '12px',
                    lineHeight: '1.3',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    margin: '0 0 12px 0',
                    transition: 'color 0.3s ease'
                  }}>
                    {book.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#4b5563'
                    }}>
                      <span style={{
                        fontSize: '16px',
                        marginRight: '12px',
                        color: '#7c3aed'
                      }}>👤</span>
                      <span style={{
                        fontWeight: '500'
                      }}>{book.author}</span>
                    </div>
                    
                    {book.genre && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#4b5563'
                      }}>
                        <span style={{
                          fontSize: '16px',
                          marginRight: '12px',
                          color: '#3b82f6'
                        }}>🏷️</span>
                        <span style={{
                          backgroundColor: '#dbeafe',
                          color: '#1d4ed8',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {book.genre}
                        </span>
                      </div>
                    )}
                    
                    {book.description && (
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        color: '#4b5563'
                      }}>
                        <span style={{
                          fontSize: '16px',
                          marginRight: '12px',
                          marginTop: '4px',
                          color: '#10b981',
                          flexShrink: 0
                        }}>📄</span>
                        <p style={{
                          fontSize: '14px',
                          lineHeight: '1.6',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          margin: '0'
                        }}>
                          {book.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Area */}
                  <div style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f3f4f6'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: '#6b7280'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#10b981',
                          borderRadius: '50%',
                          marginRight: '8px'
                        }}></div>
                        Available
                      </div>
                      <button
                        onClick={() => navigate(`/edit/${book.id}`)}
                        style={{
                          background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)',
                          color: 'white',
                          padding: '8px 16px',
                          border: 'none',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #6d28d9 0%, #2563eb 100%)';
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)';
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = 'none';
                        }}
                      >
                        <span>✏️</span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .book-card h3:hover {
          color: #7c3aed !important;
        }
      `}</style>
    </div>
  );
}

export default BooksList;
