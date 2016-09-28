import React, {createFragment} from 'react';
import rest from 'rest';
import { Header} from './admin/Header';
import { Users } from './admin/Users';
import { Response } from './Response';
import { UsersConverter } from '../utils/UsersConverter';

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
    return rest('/api/users').then(response => {

      const { entity, headers } = response;
      const jsonHateoas = JSON.parse(entity);
      const users = new UsersConverter().users(jsonHateoas);

      this.setState({
        users,
        entity,
        headers
      });
    });
  }

  componentDidMount() {
    this.request = this.getUsers();
  }

  componentWillUnmount() {
    if (this.request) {
      //// jquery:
      // request.abort();
      this.request.cancel();
    }
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
