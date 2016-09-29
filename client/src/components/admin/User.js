import React from 'react';

export const User = ({ user, rmUserById }) => (
  <tr key={user.id} class="row">
    <td class="col-sm-3"><button onClick={() => rmUserById(user.id)}>X</button> {user.id}</td>
    <td class="col-sm-3">{user.username}</td>
    <td class="col-sm-6">{user.roles.map((role, i) => <span key={i}>{role}{i === user.roles.length - 1 ? '' : ', '}</span>)}</td>
  </tr>
);
