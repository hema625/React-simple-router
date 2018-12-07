import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link,NavLink,Redirect,Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

// const User = ({match}) => {

//   return (<h1>Welcome {match.params.username}</h1>);
// }
const User = (params) => {

  return (<h1>Welcome {params.username}</h1>);
}
class App extends Component {
  state = {
    loggedIn : false
  }
  // loginHandle = () => {
  //   this.setState({
  //     loggedIn : true
  //   })
  // }
  loginHandle = () => {
    this.setState(prevState => ({
        loggedIn : !prevState.loggedIn
    }))
  }
  render() {
    return (
      <Router>
         <div className="App">
         <ul>
            <Link to = "/" exact activeStyle = {
                {color : 'green'}
            }>Home</Link> <br/>
            <Link to = "/about" exact activeStyle = {
                {color : 'green'}
            } >About</Link> <br/>
            <NavLink to = "/user/hemalatha" exact activeStyle = {
                {color : 'green'}
            }>Hemalatha</NavLink> <br/>
            <NavLink to = "/user/sridhar" exact activeStyle = {
                {color : 'green'}
            }>Sridhar</NavLink> <br/> 
         </ul>
         <Prompt when = {!this.state.loggedIn} 
            // message = "You should log in"/>
            message = {(location)=> {
                    return (location.pathname.startsWith('/user') ? 'Are you sure' : true) 

            } }/>
         <button onClick = {this.loginHandle.bind(this)}>{this.state.loggedIn ? 'Logout' : 'Login'}</button>
         <Route path = "/" exact render = {
              () => {
                return (<h1>Welcome Hema</h1>);
              }
         }  />
          <Route path = "/about" exact strict render = {
              () => {
                return (<h1>About Hema</h1>);
              }
         }  />

         <Route path = "/user/:username" render = {
              ({match}) => (
                this.state.loggedIn ? <User  username = {match.params.username}/> : (<Redirect to = "/"/>)
              )

         } />  
         {/* component = {User} */}
    
      </div>
      </Router>
    );
  }
}

export default App;
