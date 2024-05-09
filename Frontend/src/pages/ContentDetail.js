import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ContentDetail() {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // Fetch content details from backend based on the ID
  }, [id]);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.body}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ContentDetail;
