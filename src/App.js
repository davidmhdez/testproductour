import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import page2 from './pages/page2';
import Tour from 'reactour';


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
      <Tour 
        steps={steps}
        isOpen={this.state.isOpenTour}
        onRequestClose={this.closeTour}
        closeWithMask={false}
        // disableDotsNavigation={true}
        // disableInteraction={true}
        disableKeyboardNavigation={true}
        showButtons={false}
        
        />
    </BrowserRouter>
    );
  }
}

function setFocus(){
  // document.getElementById("field").focus
  alert("it works!!");
}

const steps = [
  {
    selector:'#title',
    content: 'this is the first step'
  },
  {
    selector:'#field',
    content:'you need fill this',
    // action: node =>{
    //   node.focus();
    //   setFocus();
    //   // 
    // }

    action: () =>{
      // document.getElementById('field').focus();
      alert("it works!!");
    }

    // content: ({goTo}) =>(
    //   <button onClick={()=>goTo(0)}>Click me</button>
    // )
  },
  {
    selector:'#btn',
    content: 'you must click this button',
    stepInteraction: false
  },
  {
    selector:'#nextPage',
    content: 'Go to the next page'
  },
  {
    selector:'#title2',
    content:'hi, we are in other page'
  }
];

export default App;
