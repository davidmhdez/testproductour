import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Navbar from '../components/Navbar';
import page2 from './page2';
import initHelpHero from 'helphero';
// import Login from './Login';


import React, { Component } from 'react';

var hlp = initHelpHero('iDW653GhT52');

class Router extends Component {

  state = {
    isOpenTour: false,
    isNew: false,
    user: this.props.user
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
  
  componentDidMount() {
    // hlp.anonymous();
    hlp.identify(this.state.user,{
      isNew: this.state.isNew
    });
    hlp.showBeacon()
  }

  render() { 
    return (
      <BrowserRouter>
      <Navbar/>
      <Switch>
        {/* <Route exact path='/' component={Login}/> */}
        <Route exact path ='/' render={()=>(
          <Home
            // openTour={this.openTour}
            startour={this.startour}
            enableNew={this.enableNew}
          />
        )}/>
        <Route exact path='/page2' component={page2}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default Router;
