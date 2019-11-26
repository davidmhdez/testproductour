import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './home';
import Navbar from '../components/Navbar';
import page2 from './page2';
import initHelpHero from 'helphero';
import Login from './Login';


import React, { Component } from 'react';

var hlp = initHelpHero('iDW653GhT52');

class Router extends Component {

  state = {
    isOpenTour: false,
    isNew: false,
    user: null,
    navigate: false
  }

  startour = () => {
    hlp.startTour('cHZ2xnDr0hP')
    console.log('tour startes')
  }

  enableNew = () => {
    this.setState({
      isNew: true
    },()=>{
      hlp.update({
        isNew: this.state.isNew
      });
      console.log('updated help hero');
    })

    console.log('toogle enabled')
  }
  

  setLocalStorage = (userProps) =>{
    localStorage.setItem('userProps',JSON.stringify(userProps));
  }

  getLocalStorage = () =>{
    const lcUser = JSON.parse(localStorage.getItem('userProps'));
    return lcUser
  }

  login = (user) => {
    this.setLocalStorage({user});
    this.setState({
      user,
      navigate:true
    })
    hlp.identify(this.state.user,{
      isNew: this.state.isNew
    });
    hlp.showBeacon()
  }

  logout = () =>{
    localStorage.removeItem('userProps')
    console.log('exit');
    
      this.setState({
        navigate:false,
        user: null
      })
    
  }

  componentDidMount() {
    // console.log(this.getLocalStorage())
    const lsUser = this.getLocalStorage('userProps')
    this.setState({
      user: lsUser
    })
    console.log(`dmuser: ${this.state.user}`)
  }

  render() { 

    return (
      <BrowserRouter>
        {this.state.user !== null ? <Navbar logout={this.logout}  /> : ''}
        <Switch>
          <Route exact path ='/' render={()=>(
            <Login
              login={this.login}
            />
          )}/> 
          <Route exact path ='/home' render={()=>(
            <Home
              startour={this.startour}
              enableNew={this.enableNew}
            />
          )}/>
          <Route exact path='/page2' component={page2}/>
        </Switch>
        {console.log(`reuser: ${this.state.user}`)}
        {!this.state.navigate ? <Redirect to='/'/> : ''}
      </BrowserRouter>
    );
  }
}

export default Router;
