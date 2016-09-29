import React from 'react';
import { Link } from 'react-router';
import {
  client,
  isAuthenticated
} from '../services/user/me';

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = { authenticated: false };
  }

  componentDidMount() {
    client.then(response => this.setState({
      authenticated: isAuthenticated(response)
    }));
  }

  render() {
    const label = this.state.authenticated ? 'Logout' : 'Login';
    const href = this.state.authenticated ? '/logout' : '/login';
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#an-amazing-app"
                    aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link class="navbar-brand" to="/">an amazing app</Link>
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div class="collapse navbar-collapse" id="an-amazing-app">
            <ul class="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/admin">Admin</Link></li>
              <li><Link to="/not-found">Link not-found</Link></li>
              <li class="dropdown">
                <a href="#"
                   class="dropdown-toggle"
                   data-toggle="dropdown"
                   role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><Link to="/">Home Action</Link></li>
                  <li><Link to="/main">Main</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/not-found">Something else here not-found</Link></li>
                  <li role="separator" class="divider"></li>
                  <li><Link to="/not-found">Separated link not-found</Link></li>
                  <li role="separator" class="divider"></li>
                  <li><Link to="/not-found">One more separated link not-found</Link></li>
                </ul>
              </li>
            </ul>
            <form class="navbar-form navbar-left">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search"/>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="#"
                   class="dropdown-toggle"
                   data-toggle="dropdown"
                   role="button"
                   aria-haspopup="true"
                   aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/main">Main</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/not-found">Not Found is here</Link></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
              <li><a class="active" href={href}>{label} <span class="sr-only">(current)</span></a></li>
            </ul>
          </div>
          {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
      </nav>
    );
  }
}
