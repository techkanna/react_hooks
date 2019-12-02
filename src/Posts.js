import React from 'react';

function Posts({ id, title, body }) {
  return (
    <div className="posts">
      <h6>{id}</h6>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Posts;
