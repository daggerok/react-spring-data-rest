import React from 'react';
import { User } from './User';

export const Users = ({ users }) => (
  <tbody class="table-striped">
    {users.map((user, i) => <User key={i} user={user}/>)}
  </tbody>
);
