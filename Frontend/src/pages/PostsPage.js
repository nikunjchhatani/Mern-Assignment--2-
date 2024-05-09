import React from 'react';
import { Link } from 'react-router-dom';
import './PostsPage.css'; // Import custom CSS for styling

const posts = [
  { id: 1, title: 'GPU Prices Are Dropping: GPUs Are Now Affordable In 2023', excerpt: 'Finally, the good news is on the way this year for gamers looking to upgrade...' },
  { id: 2, title: 'What is metaverse? Why Facebook changed its name to Meta?', excerpt: "Metaverse and Facebook's transition to Meta is one of the hottest topics in..." },
  // Add more posts as needed
];

const PostsPage = () => {
  return (
    <div className="posts-page-container">
      <h1 className="page-title">All Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-excerpt">{post.excerpt}</p>
            <Link to={`/posts/${post.id}`} className="read-more-link">Read More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
