import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import page2 from './pages/page2';

import React, { Component } from 'react';

class App extends Component {

  state = {
    isOpenTour: false
  }

  openTour = () =>{
    this.setState({
      isOpenTour: true
    })
  }

  closeTour = () => {
    this.setState(
      {
        isOpenTour: false
      }
    )
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
