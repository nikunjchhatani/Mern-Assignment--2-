import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './AddContent.css';

const AddContent = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [error, setError] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/api/content', formData);
      console.log(response.data);
      // Redirect to home page after successful content addition
      history.push('/');
    } catch (error) {
      console.error('Error adding content:', error);
      setError('Failed to add content. Please try again.');
    }
  };

  return (
    <div className="add-content-container">
      <h2 className="add-content-title">Add Content</h2>
      <form onSubmit={handleSubmit} className="add-content-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="add-content-input"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          className="add-content-textarea"
          value={formData.content}
          onChange={handleChange}
          required
        ></textarea>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="add-content-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddContent;
