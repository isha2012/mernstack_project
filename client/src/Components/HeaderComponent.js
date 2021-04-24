import React, { Component, useContext } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { UserContext} from "./MainComponent";

const RenderMenu = () => {
    const { state, dispatch } = useContext(UserContext);
    if(state) {
        return(
            <>
                <NavItem>
                       <NavLink className="nav-link" to="Home">
                           <span className="fa fa-home fa-lg"></span> Home
                       </NavLink>
                </NavItem>
                <NavItem>
                        <NavLink className="nav-link" to="/upComplaints">
                            Upload Complaints
                        </NavLink>
                </NavItem>
                <NavItem>
                        <NavLink className="nav-link" to="/addstories">
                            Add Happy Stories
                        </NavLink>
                </NavItem>
                <NavItem>
                        <NavLink className="nav-link" to="/">
                            Responses
                        </NavLink>
                </NavItem>
                <NavItem>
                       <NavLink className="nav-link" to="/stats">
                           Stats
                       </NavLink>
                 </NavItem>
                <NavItem>
                       <NavLink className="nav-link" to="/logout">
                           <span className="fa fa-address-card fa-lg"></span> Logout
                       </NavLink>
                 </NavItem>

            </>
        )
    }
    else {
        return(
        
            <>
               <NavItem>
                       <NavLink className="nav-link" to="Home">
                           <span className="fa fa-home fa-lg"></span> Home
                       </NavLink>
                </NavItem>

              
                { /*Dropdown*/ }
                <UncontrolledDropdown nav inNavbar>

                       <DropdownToggle nav caret>
                            Sign up
                       </DropdownToggle>

                       <DropdownMenu right>
                            <DropdownItem href="./login_Admin">Admin Login</DropdownItem>

                            <DropdownItem href="./login_User">User Login</DropdownItem>
                       </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                       <NavLink className="nav-link" to="/stats">
                           Stats
                       </NavLink>
                 </NavItem>

                 <NavItem>
                       <NavLink className="nav-link" to="/contactus">
                           <span className="fa fa-address-card fa-lg"></span> Contact Us
                       </NavLink>
                 </NavItem>
            </>
           
        )
        
    }
}

class Header extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
                isNavOpen: false
        };
        //now the method toggleNav is avaiable for use 
        this.toggleNav = this.toggleNav.bind(this);
    }

  //to use this method we have to bind it in construtor
  toggleNav() {
      this.setState({
           //the value will be in Negation, if it is false it will be true and if the value is true it will become false
           isNavOpen: !this.state.isNavOpen
      });
  }
 

  render() {

    return(

    <React.Fragment>

      <Navbar dark expand="md" color="primary">
         <div className="container">
      
           { /*toggle on extra small size screen and for creating toggle button*/}
            <NavbarToggler onClick={this.toggleNav} />

            <NavbarBrand className="mr-auto" href="/">
                 <img src="assets/images/logo.png" heights="30" width="41" alt="Lost Person Records" />
            </NavbarBrand>
           
            { /*collapsing the navbar at small size window. without collapse function it will not collapse. */ }

            <Collapse isOpen={this.state.isNavOpen} navbar>
             <Nav navbar>

             
        
                <RenderMenu />
                

            </Nav>
          </Collapse>     
         </div>
      </Navbar>

      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-8">
                       <h1>Lost Person Records</h1>
                       <p>Many times come across the news that some person is missing, the child is missing and everyday so many people are being lost and we are unaware of that. While at the other hand police department single handedly manages this and try to find the lost people. So to handle this in an effective manner as well as to make Police department’s work easy, we have taken this domain.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>

    </React.Fragment>

    );
  }
}

export default Header;
