import React from 'react';

export const User = ({ user }) => (
  <tr key={user.id} class="row">
    <td class="col-sm-2">{user.id}</td>
    <td class="col-sm-3">{user.username}</td>
    <td class="col-sm-7">{user.roles.map((role, i) => <span key={i}>{role}{i === user.roles.length - 1 ? '' : ', '}</span>)}</td>
  </tr>
);
