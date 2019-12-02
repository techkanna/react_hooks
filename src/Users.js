import React from 'react';

function Users({ id, name, phone, email, website }) {
  return (
    <div className="users">
      <h6 className="center">{id}</h6>
      <h2>{name}</h2>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}

export default Users;
