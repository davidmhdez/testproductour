import React,{Component} from 'react';
import styled from 'styled-components';

export default class Home extends Component {

    message = () =>{
        alert('clicked!!!');
    }

    render() {
        return (
            <div>
                <h1 id="title">This is home</h1>
                <TourButton onClick={this.props.openTour}>Start tour</TourButton>
                <Container>
                    <h2>Fill this field</h2>
                    <div>
                        <label>Name</label>
                        <input id="field" type="text"/>
                        <button id="btn" onClick={this.message} >save</button>
                    </div>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: purple;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
    > div{
        display:grid;
        width:100px;
        margin: 0 auto;
        > input {
            margin: 10px 0;
        }
    }
`;

const TourButton = styled.button`
    padding:10px;
    border: 2px solid white;
    background-color: purple;
    font-weight: bold;
    color: white;
`;