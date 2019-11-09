import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './pages/home';
import Navbar from './components/Navbar';
import page2 from './pages/page2';
import Tour from 'reactour';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path ='/' component={home}/>
        <Route exact path='/page2' component={page2}/>
      </Switch>
      <Tour 
        steps={steps}
        isOpen={true}
        />
    </BrowserRouter>
  );
}

const steps = [
  {
    selector:'#title',
    content: 'this is the first step'
  },
  {
    selector:'#nextPage',
    content: 'Go to the next page'
  }
];

export default App;
