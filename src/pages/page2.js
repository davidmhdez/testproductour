import React,{Component} from 'react';
import styled from 'styled-components';

export default class page2 extends Component {

    render() {
        return (
            <div>
                <h1>This is page 2</h1>
                <Container>
                    I'm a div too
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: navy;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
`;