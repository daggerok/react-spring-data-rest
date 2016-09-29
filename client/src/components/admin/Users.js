import React from 'react';
import rest from 'rest';
import { User } from './User';
import { UsersConverter } from '../../utils/converters/UsersConverter';

export class Users extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.client = rest('/api/users');
    this.updated = this.updated.bind(this);
  }

  componentDidMount() {
    this.client.then(response => {
      const { entity } = response;
      const hateoas = JSON.parse(entity);
      const users = new UsersConverter().users(hateoas);
      this.setState({ users });
    });
  }

  componentDidUpdate() {
    console.log(`updated`)
  }

  updated() {
    this.forceUpdate();
  }

  render() {
    return (
      <tbody class="table-striped">
      {this.state.users.map((user, i) => <User key={i} updated={this.updated} user={user}/>)}
      </tbody>
    );
  }
}
