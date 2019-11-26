import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import page2 from './pages/page2';
import initHelpHero from 'helphero';
import React, { Component } from 'react';

var hlp = initHelpHero('iDW653GhT52');
class App extends Component {

  state = {
    isOpenTour: false
  }

  openTour = () =>{
    this.setState({
      isOpenTour: true
    })
    hlp.startTour('cfRVozUyTIo')    
  }

  closeTour = () => {
    this.setState(
      {
        isOpenTour: false
      }
    )
  }

  componentDidMount() {
    hlp.anonymous()
  }
  
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path ='/' render={()=>(
          <Home
            openTour={this.openTour}
          />
        )}/>
        <Route exact path='/page2' component={page2}/>
      </Switch>     
    </BrowserRouter>
    );
  }
}

export default App;
