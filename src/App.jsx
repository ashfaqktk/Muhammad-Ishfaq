import './App.css';

function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo">Little Lemon</div>
        <nav>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Reservations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <a href="#booking" className="reserve-button">
            Reserve a Table
          </a>
        </div>
        <div className="hero-image">
          <div className="lemon-circle">🍋</div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Based in Chicago, Little Lemon serves authentic Mediterranean dishes
          prepared with fresh ingredients and traditional techniques. Join us
          for a delightful culinary experience in a warm and friendly ambiance.
        </p>
      </section>

      {/* MENU */}
      <section id="menu" className="menu">
        <h2>Specials</h2>
        <div className="menu-grid">
          <div className="menu-card">
            <div className="food-image">🥗</div>
            <div>
              <h3>Greek Salad</h3>
              <p className="price">$12.99</p>
              <p>
                Crispy romaine lettuce, fresh tomatoes, cucumber, olives, and
                authentic feta cheese.
              </p>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-image">🍞</div>
            <div>
              <h3>Bruschetta</h3>
              <p className="price">$7.99</p>
              <p>
                Grilled bread rubbed with garlic and topped with olive oil,
                salt, and diced tomatoes.
              </p>
            </div>
          </div>
          <div className="menu-card">
            <div className="food-image">🍰</div>
            <div>
              <h3>Lemon Dessert</h3>
              <p className="price">$6.99</p>
              <p>
                Authentic recipe handed down from grandmother, made with real
                lemons and love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="booking">
        <div className="booking-container">
          <h2>Reserve a Table</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="date">Choose Date</label>
              <input type="date" id="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Choose Time</label>
              <select id="time" required>
                <option value="">Select Time Slot</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="20:00">8:00 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                min="1"
                max="10"
                placeholder="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion">
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <button type="submit">Confirm Reservation</button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>📍 123 Main Street, Chicago, IL</p>
        <p>📞 (555) 012-3456</p>
        <p>✉️ info@littlelemon.com</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2026 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;