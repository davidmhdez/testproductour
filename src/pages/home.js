import React,{Component} from 'react';
import styled from 'styled-components';

export default class home extends Component {

    render() {
        return (
            <div>
                <h1 id="title">This is home</h1>
                <Container>
                    I'm a div
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
`;