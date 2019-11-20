import React,{Component} from 'react';
import styled from 'styled-components';
import Field from '../components/Field';
import Switch from 'react-switch';
import Calendar from 'react-calendar';

export default class page2 extends Component {


    state = {
        toogleValue: false
    }

    changeValue = () =>{
        if(this.state.toogleValue){
            this.setState({
                toogleValue: false
            })
        }
        else{
            this.setState({
                toogleValue: true
            })
        }
    }

    render() {

        const {toogleValue} = this.state;

        return (
            <div>
                <h1 id="title2">This is page 2</h1>
                <Container>
                    <Field/>
                    <SectionContainer>
                        <Switch className="toogle" checked={toogleValue} onChange={this.changeValue}/>
                    </SectionContainer>
                    <SectionContainer>
                        <Calendar className="calendar"/>
                    </SectionContainer>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    width: 100%;

    @media (min-width: 550px) {
        width:500px;
    }
    height: 500px;
    background-color: navy;
    color: white;
    font-size: 16px;
    font-weight: bold;
    margin: 0 auto;
`;

const SectionContainer = styled.div`
    margin-top: 50px;
    padding: 15px;
    text-align: center;
`;