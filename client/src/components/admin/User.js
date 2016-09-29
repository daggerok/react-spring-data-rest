import React from 'react';
import rest from 'rest';

const rmClient = (id) => rest({
  method: 'DELETE',
  path: `/api/users/${id}`
});
const rm = (id) => rmClient(id).then(
  response => console.log(`user with id ${id} removed`),
  error => console.error('error', error)
);

export const User = ({ user, updated }) => (
  <tr key={user.id} class="row">
    <td class="col-sm-3"><button onClick={() => {
      rm(user.id);
      updated();
    }}>X</button> {user.id}</td>
    <td class="col-sm-3">{user.username}</td>
    <td class="col-sm-6">{user.roles.map((role, i) => <span key={i}>{role}{i === user.roles.length - 1 ? '' : ', '}</span>)}</td>
  </tr>
);
