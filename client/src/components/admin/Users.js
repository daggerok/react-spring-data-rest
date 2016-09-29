import React from "react";
import rest from "rest";
import {User} from "./User";
import {UsersConverter} from "../../utils/converters/UsersConverter";

const uri = '/api/users';
const getUsersClient = rest(uri);
const rmUserClient = (id) => rest({
  method: 'DELETE',
  path: `${uri}/${id}`
});

export class Users extends React.Component {
  constructor() {
    super();
    this.state = { users: [] };
    this.rmUserById = this.rmUserById.bind(this);
  }

  componentDidMount() {
    getUsersClient.then(response => {
      const {entity} = response;
      const hateoas = JSON.parse(entity);
      const users = new UsersConverter().users(hateoas);

      this.setState({ users });
    });
  }

  rmUserById(id) {
    rmUserClient(id).then(
      response => this.setState({ users: [ ...this.state.users.filter(user => user.id != id) ] }),
      error => console.error('error', error)
    );
  }

  render() {
    return (
      <tbody class="table-striped">
        {this.state.users.map((user, i) => <User key={i} user={user} rmUserById={this.rmUserById}/>)}
      </tbody>
    );
  }
}
