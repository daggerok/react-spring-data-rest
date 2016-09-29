import React from 'react';
import { User } from './User';
import UserConverter from '../../converters/UserConverter';

import {
  getClient,
  deleteClient
} from '../../services/user/api/users';

export class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      authenticated: false
    };
    this.rmUserById = this.rmUserById.bind(this);
  }

  componentDidMount() {
    getClient.then(response => {
      const { entity } = response;
      const hateoas = JSON.parse(entity);
      const users = UserConverter.users(hateoas);

      this.setState({ users });
    });
  }

  rmUserById(id) {
    deleteClient(id).then(
      response => {
        if (response.status.code === 204 ) {
          this.setState({ users: [ ...this.state.users.filter(user => user.id != id) ] })
        }
      }
    );
  }

  render() {
    return (
      <tbody class="table-striped">
        {this.state.users.map((user, i) => <User key={i}
                                                 user={user}
                                                 rmUserById={this.rmUserById} />)}
      </tbody>
    );
  }
}
