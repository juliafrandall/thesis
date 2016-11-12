import React from 'react'
import Logout from './logout.js'
import { loginUser } from '../actions/loginActions'
import { logoutUser } from '../actions/logoutActions'
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import Profile from './profile.js'
import { Modal, 
        Button,
        ModalHeader,
        ModalTitle,
        ModalFooter,
        ModalBody
         } from 'react-bootstrap' 

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModel: false,
      first: "julia",
      last: "Randall",
      email: "juliafrandall@gmail.com",
      phone: "561-271-0104",
      about: "I am.... "
    }
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
    open() {
      console.log('inside open')
      this.setState({
        showModel: true
      })
    };

    close() {
      this.setState({
        showModel: false,
      })
    };

  render() {
    return (
      <div className="nav">
        <h1 className="title">Slacker</h1>
        <a className="navbutton" href="#" role="button" 
        onClick={this.open}>Profile</a>
        <Profile 
          show={this.state.showModel} 
          onHide={this.close}
          first={this.state.first} 
          last={this.state.last}
          email={this.state.email}
          phone={this.state.phone}
          about={this.state.about}
          />
        <a className="navbutton" href="/Login"> Login </a>
        <a className="navbutton" href="/Logout">LogOut</a>
      </div>
    )
  }
}
  
//THESE states will need to be dynamically changed from database, based on authentication 

  
    // <Route path='LogOut' component={Logout} />
  
//Login Component should switch to Logout
//User should see Logout once logged in, User should see Login when Logged Out

// var Modal = React.createClass({
//   render() {
//     return (
//       <div> 
//     <button type="button">
//       <span class="hide">Close</span>
//     </button>
//   </div>;
//   }
// });


