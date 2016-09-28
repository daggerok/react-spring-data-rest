import React, {createFragment} from 'react';
import rest from 'rest';
import { Header} from './admin/Header';
import { Users } from './admin/Users';
import { UsersConverter } from '../utils/UsersConverter';
// import { Response } from './Response';

export class Admin extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      entity: '',
      headers: {}
    };

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers() {
    this.client = rest('/api/users');
    this.client.then(response => {

      const { entity, headers } = response;
      const jsonHateoas = JSON.parse(entity);
      const users = new UsersConverter().users(jsonHateoas);

      this.setState({
        users,
        entity,
        headers
      });
    });
    return this.client;
  }

  componentDidMount() {
    this.client = this.getUsers();
  }

  componentWillUmnount() {
    console.log('this.client', this.client || {});
  }

  render() {
    return (
      <div>
        {/*<button onClick={this.getUsers}>try</button>*/}
        {/*<Response entity={this.state.entity}*/}
                  {/*headers={this.state.headers}/>*/}

        <table className="table">
          <Header />
          <Users users={this.state.users} />
        </table>
      </div>
    );
  }
}
