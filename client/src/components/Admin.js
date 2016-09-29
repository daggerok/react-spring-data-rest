import React from 'react';
import { Header} from './admin/Header';
import { Users } from './admin/Users';

export const Admin = () => (
  <div>
    <table className="table">
      <Header />
      <Users />
    </table>
  </div>
);
