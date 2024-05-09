import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="logo">My Blog</h1>
        <nav className="navigation">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-section">
          <h2 className="hero-heading">Welcome to My Blog</h2>
          <p className="hero-description">Explore insightful articles, share your thoughts, and connect with our community.</p>
          <Link to="/posts" className="btn-primary">View All Posts</Link>
        </section>
        <section className="featured-posts">
          <h3 className="section-heading">Featured Posts</h3>
          {/* Render featured posts here */}
          <div className="post-card">
            <h4 className="post-title">GPU Prices Are Dropping: GPUs Are Now Affordable In 2023</h4>
            <p className="post-excerpt">Finally, the good news is on the way this year for gamers looking to upgrade...</p>
            <Link to="/posts/1" className="btn-secondary">Read More</Link>
          </div>
          {/* Repeat for other featured posts */}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
