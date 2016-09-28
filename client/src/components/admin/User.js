import React from 'react';

export const User = ({ user }) => (
  <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.username}</td>
    <td>{user.roles}</td>
  </tr>
);
