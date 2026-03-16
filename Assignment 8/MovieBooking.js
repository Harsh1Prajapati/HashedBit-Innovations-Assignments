import React, { useState } from "react";

const moviesList = [
  { id: 1, title: "The Dark Knight", img: "https://wallpapercave.com/wp/wp9910362.jpg", desc: "Action / Thriller - A hero faces the ultimate villain." },
  { id: 2, title: "Inception", img: "https://wallpapercat.com/w/full/b/1/c/304900-1536x2732-samsung-hd-inception-wallpaper-photo.jpg", desc: "Sci-Fi - A thief who steals corporate secrets through dreams." },
  { id: 3, title: "Interstellar", img: "https://w0.peakpx.com/wallpaper/438/840/HD-wallpaper-interstellar-2014-movie-poster.jpg", desc: "Sci-Fi - Explorers travel through a wormhole in space." },
  { id: 4, title: "Avatar", img: "https://w0.peakpx.com/wallpaper/609/869/HD-wallpaper-avatar-2-the-way-of-water-top-35-best-avatar-2-background.jpg", desc: "Fantasy - A marine dispatched to the moon Pandora." },
  { id: 5, title: "Avengers", img: "https://i.pinimg.com/736x/d0/49/cd/d049cdc92c398845a394e6a111d0aff2.jpg", desc: "Action - Earth's mightiest heroes must come together." },
  { id: 6, title: "Matrix", img: "https://w0.peakpx.com/wallpaper/623/348/HD-wallpaper-the-matrix-1080x1920-morpheus-movies-neo-trinity.jpg", desc: "Sci-Fi - A computer hacker learns from mysterious rebels." },
  { id: 7, title: "Joker", img: "https://w0.peakpx.com/wallpaper/1001/909/HD-wallpaper-joker-sad-joaquin-phoenix-joker-2019-joker-face.jpg", desc: "Drama - A mentally troubled stand-up comedian." },
  { id: 8, title: "Spider-Man", img: "https://i.pinimg.com/736x/28/e4/3a/28e43a1c531454c2ff5509a82fde76b6.jpg", desc: "Action - Teenager gains spider-like abilities." },
];

function MovieBooking() {

  const [currentPage, setCurrentPage] = useState("list");

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [bookingId, setBookingId] = useState("");

  const renderMovieList = () => (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f4f4f9", minHeight: "100vh" }}>
      <h2>Now Showing</h2>
      {}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: "20px", 
        maxWidth: "1000px", 
        margin: "0 auto" 
      }}>
        {moviesList.map((movie) => (
          <div 
            key={movie.id} 
            onClick={() => {
              setSelectedMovie(movie);
              setCurrentPage("details"); 
            }}
            style={{
              backgroundColor: "white", padding: "10px", borderRadius: "10px", 
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)", cursor: "pointer", transition: "0.3s"
            }}
          >
            <img src={movie.img} alt={movie.title} style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }} />
            <h3 style={{ fontSize: "18px", color: "#333", margin: "10px 0" }}>{movie.title}</h3>
            <button style={{ backgroundColor: "#007BFF", color: "white", border: "none", padding: "8px 15px", borderRadius: "5px", width: "100%" }}>
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  
  const renderMovieDetails = () => (
    <div style={styles.centerPage}>
      <div style={styles.card}>
        <img src={selectedMovie.img} alt={selectedMovie.title} style={{ width: "200px", borderRadius: "10px" }} />
        <h2>{selectedMovie.title}</h2>
        <p style={{ color: "#555", marginBottom: "20px" }}>{selectedMovie.desc}</p>
        
        <button 
          onClick={() => setCurrentPage("form")} 
          style={{ ...styles.btn, backgroundColor: "#28a745", marginRight: "10px" }}
        >
          Book Seat
        </button>
        <button 
          onClick={() => setCurrentPage("list")} 
          style={{ ...styles.btn, backgroundColor: "#6c757d" }}
        >
          Back to Movies
        </button>
      </div>
    </div>
  );

  const handleFormSubmit = (e) => {
    e.preventDefault(); 
    setBookingId("BKG-" + Math.floor(10000 + Math.random() * 90000));
    setCurrentPage("success");
  };

  const renderForm = () => (
    <div style={styles.centerPage}>
      <form onSubmit={handleFormSubmit} style={styles.card}>
        <h2>Enter Your Details</h2>
        <h4 style={{ color: "#007BFF", marginTop: 0 }}>Movie: {selectedMovie.title}</h4>
        
        <input 
          type="text" required placeholder="Full Name" 
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={styles.input}
        />
        <input 
          type="email" required placeholder="Email Address" 
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={styles.input}
        />
        <input 
          type="tel" required placeholder="Mobile Number" 
          value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          style={styles.input}
        />
        
        <button type="submit" style={{ ...styles.btn, backgroundColor: "#007BFF", width: "100%", marginTop: "10px" }}>
          Confirm Booking
        </button>
        <button 
          type="button" onClick={() => setCurrentPage("details")} 
          style={{ ...styles.btn, backgroundColor: "#6c757d", width: "100%", marginTop: "10px" }}
        >
          Cancel
        </button>
      </form>
    </div>
  );

  const renderSuccess = () => (
    <div style={styles.centerPage}>
      <div style={{ ...styles.card, borderTop: "5px solid #28a745" }}>
        <h1 style={{ color: "#28a745", margin: "0 0 10px 0" }}>🎉 Booking Confirmed!</h1>
        <h3 style={{ backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px", border: "1px dashed #aaa" }}>
          Ticket ID: <span style={{ color: "#e91e63" }}>{bookingId}</span>
        </h3>
        
        <div style={{ textAlign: "left", marginTop: "20px", marginBottom: "20px", lineHeight: "1.8" }}>
          <strong>Movie:</strong> {selectedMovie.title} <br />
          <strong>Name:</strong> {formData.name} <br />
          <strong>Email:</strong> {formData.email} <br />
          <strong>Mobile:</strong> {formData.mobile}
        </div>

        <button 
          onClick={() => {
            setFormData({ name: "", email: "", mobile: "" });
            setCurrentPage("list");
          }} 
          style={{ ...styles.btn, backgroundColor: "#17a2b8", width: "100%" }}
        >
          Book Another Movie
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {currentPage === "list" && renderMovieList()}
      {currentPage === "details" && renderMovieDetails()}
      {currentPage === "form" && renderForm()}
      {currentPage === "success" && renderSuccess()}
    </div>
  );
}

const styles = {
  centerPage: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#eef2f3" },
  card: { backgroundColor: "white", padding: "30px", borderRadius: "15px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)", textAlign: "center", width: "350px" },
  btn: { color: "white", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontWeight: "bold", fontSize: "16px" },
  input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ccc", boxSizing: "border-box", fontSize: "15px" }
};

export default MovieBooking;