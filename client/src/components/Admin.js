import React, {createFragment} from 'react';
import rest from 'rest';
import { Header} from './admin/Header';
import { Users } from './admin/Users';
import { UsersConverter } from '../utils/converters/UsersConverter';

export class Admin extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.client = rest('/api/users');
    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    this.client.then(response => {
      const { entity } = response;
      const hateoas = JSON.parse(entity);
      const users = new UsersConverter().users(hateoas);

      this.setState({ users });
    });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div>
        <table className="table">
          <Header />
          <Users users={this.state.users} />
        </table>
      </div>
    );
  }
}
