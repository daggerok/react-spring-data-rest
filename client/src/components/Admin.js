/**
 * Created by mak on 9/28/16.
 */
import React from 'react';
import { Header} from './admin/Header';
import { Users } from './admin/Users';

export class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    // fetch
  }

  componentWillUnmount() {
    // abort
  }

  render() {
    return (
      <table class="table">
        <Header />
        <Users users={this.state.users} />
      </table>
    );
  }
}
