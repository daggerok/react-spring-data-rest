/**
 * Created by mak on 9/6/16.
 */
import React from 'react';
import { Link } from 'react-router';

export default () => (
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#an-amazing-app" aria-expanded="false">
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
          <li class="active"><Link to="/">Home <span class="sr-only">(current)</span></Link></li>
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
              <li><Link to="/not-found">Another action not-found</Link></li>
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
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#"
               class="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div>
      {/*<!-- /.navbar-collapse -->*/}
    </div>
    {/*<!-- /.container-fluid -->*/}
  </nav>
);
