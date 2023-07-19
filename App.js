import React from 'react';
import './App.css';

function Navigation() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-link">Home</a>
      <a href="#" className="navbar-link">Courses</a>
      <a href="#" className="navbar-link">Calendar</a>
      <a href="#" className="navbar-link">Assignments</a>
      <a href="#" className="navbar-link">Grades</a>
    </nav>
  );
}

function LoginForm() {
  return (
    <div className="login-form">
      <h3 className="login-title">Promineo Tech</h3>
      <form>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" name="username" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" name="password" className="form-input" />
        </div>
        <button type="submit" className="form-button">Log In</button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      Coding 2023 by Jean Wilkens Desjardins
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
