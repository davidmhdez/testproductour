import React,{Component} from 'react';
// import Login from './pages/Login';
import Router from './pages/Router';

export default class App extends Component {

    // state = {
    //     user: ''
    // }

    // login = (user) =>{
    //     this.setState({
    //         user
    //     })
    // }

    render() {

        // const {user} = this.state;

        return (
            <div className="class-name">
                {/* {user === '' ? <Login login={this.login} /> : <Router user={user}/>} */}
                <Router/>
            </div>
        );
    }
}