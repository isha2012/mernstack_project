import React, { createContext, useReducer } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Login_Admin from './login_Admin';
import Signup_admin from './Signup_admin';
import Login_User from './login_User';
import Signup_User from './signup_user';
import Stats from './StatisticsComponent';
import Logout from './Logout';
import UploadComplaints from './UploadComplaints';
import CreateData from './addData';
import MapContainer from './contact';
//importing router applications
import { Switch, Route, Redirect } from 'react-router-dom';

import { initialstate, reducer } from "../reducer/UseReducer";

export const UserContext = createContext();
export const AdminContext = createContext();

const Main = () => {

    const [ state, dispatch ] = useReducer(reducer, initialstate);
   
    //initialstate value will be stored in state.

    return (
      <>
       <UserContext.Provider value={{state, dispatch}}>
           <AdminContext.Provider value={{state, dispatch}}>

        <div>
                <Header />
                <Switch>
        
                    <Route path='/Home' component = {Home} />
                    <Route exact path="/login_Admin" component={ Login_Admin } />
                    <Route exact path="/signup_admin" component={ Signup_admin } />
                    <Route exact path="/login_User" component={ Login_User } />
                    <Route exact path="/signup_user" component = { Signup_User } />
                    <Route exact path="/stats" component = { Stats } />
                    <Route exact path="/contactus" component = { MapContainer } />
                    <Route exact path="/addstories" component = { CreateData } />
                    <Route exact path="/upComplaints"component = { UploadComplaints } />
                    <Route exact path="/logout" component = { Logout } />
                    <Redirect to="/Home" />
        
                </Switch>
                <Footer />
            </div>
            </AdminContext.Provider>
        </UserContext.Provider>
        
      </>
      );
   
}

export default Main;


