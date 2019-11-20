import React,{Component} from 'react';
import styled from 'styled-components';

export default class Login extends Component {

    userRef = React.createRef();

    login = (e) =>{
        e.preventDefault();
        const user = this.userRef.current.value
        this.props.login(user)
    }

    render() {
        return (
            <Container>
                <LoginForm onClick={this.login}>
                    <h1>Login</h1>
                    <Label>User</Label>
                    <Input placeholder="Enter any user" ref={this.userRef}/>
                    <Button>Login</Button>
                </LoginForm>
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 80px;
`;

const LoginForm = styled.form`
    width: 100%;
    max-width: 250px;
    background-color: purple;
    padding: 10px;
    color: white;
    font-size: 16px;
    display: inline-block;
`;

const Label = styled.label`
    margin: 5px 0;
    display: block;
`;

const Input = styled.input`
    padding: 5px;
    display: block;
`;

const Button = styled.button`
    margin-top: 5px;
    padding: 5px;
    border: 2px solid white;
    background-color: purple;
    font-weight: bold;
    color: white;
`;