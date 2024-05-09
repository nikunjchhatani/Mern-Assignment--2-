import React, { useState } from 'react';

function AddContent() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send content creation request to backend
  };

  return (
    <div>
      <h2>Add Content</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddContent;
