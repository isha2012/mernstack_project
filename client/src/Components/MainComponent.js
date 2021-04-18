import React, { Component } from 'react';
import {Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Login_Admin from './login_Admin';
import Signup_admin from './Signup_admin';
import Login_User from './login_User';
import Signup_User from './signup_user';
import Stats from './StatisticsComponent';
import Logout from './Logout';
//importing router applications
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
   render() {
      return (
      <div>
          <Header />
          <Switch>

              <Route path='/Home' component = {Home} />
              <Route exact path="/login_Admin" component={ Login_Admin } />
              <Route exact path="/signup_admin" component={ Signup_admin } />
              <Route exact path="/login_User" component={ Login_User } />
              <Route exact path="/signup_user" component = { Signup_User } />
              <Route exact path="/stats" component = { Stats } />
              <Route exact path="/logout" component = { Logout } />
              <Redirect to="/Home" />
 
          </Switch>
          <Footer />
      </div>
      );
   }
}

export default Main;


