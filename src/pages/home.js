import React,{Component} from 'react';
import styled from 'styled-components';
import List from '../components/List';
import Switch from 'react-switch';

export default class Home extends Component {

    state = {
        visible: false,
        toogleValue: false
    }

    message = () =>{
        if(this.state.visible){
            this.setState({
                visible: false
            })
        }else{
            this.setState({
                visible: true
            })
        }
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
            this.props.enableNew();
        }
    }

    render() {

        const {toogleValue} = this.state;

        return (
            <div>
                <h1 id="title">This is home</h1>
                <TourButton onClick = {this.props.startour}
                >Start tour</TourButton>
                <Container className="">
                    <h2>Fill this field</h2>
                    <div>
                        <label>Name</label>
                        <input id="field" type="text"/>
                        <button id="btn" onClick={this.message} >save</button>
                    </div>
                    {this.state.visible ? <h2>this is not visible</h2> : ''}
                    <div>
                        <h3>Are you new?</h3>
                        <Switch className="toogle" checked={toogleValue} onChange={this.changeValue}/>
                    </div>
                    <List/>
                    <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim, nisl vel fringilla luctus, 
                    justo erat euismod risus, et lobortis lorem sem vel justo. Curabitur eget magna malesuada, tempus libero nec, 
                    varius justo. Praesent posuere, nisl porttitor dapibus aliquam, erat libero tempor purus, non porttitor ex ante id mi.
                    Aliquam a placerat augue. Aenean congue, risus eget consequat bibendum, felis diam tincidunt lacus, in vehicula odio dui 
                    ut ipsum. Aliquam condimentum auctor lacus ac consectetur. Class aptent taciti sociosqu ad litora torquent per conubia 
                    nostra, per inceptos himenaeos. Aliquam laoreet cursus sem eget commodo. Aliquam ante eros, facilisis quis massa eu, 
                    feugiat ultricies lectus. Morbi ultricies, massa in mattis vehicula, est erat ultrices mauris, sed malesuada sem mi eget 
                    turpis. Aliquam pulvinar tincidunt risus consequat efficitur. Morbi facilisis turpis nulla, eu malesuada felis placerat in. 
                    Donec commodo odio at enim rutrum scelerisque. Vivamus laoreet odio ac felis aliquet placerat. Duis venenatis porta dictum. 
                    Curabitur id sapien porttitor, vestibulum ipsum vitae, rutrum nunc. Vivamus id pulvinar elit. Praesent a euismod felis. 
                    Quisque porttitor justo ut dignissim ornare. Integer et justo luctus, vehicula dolor non, euismod enim. 
                    Integer maximus erat posuere lectus semper, id laoreet risus cursus.
                    </Description>
                    <h2 id="lb">label</h2>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    width:100%;
    
    @media (min-width: 550px) {
        width:500px;
    }

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

const Description = styled.p`
    margin-top: 50px;
    padding: 10px;
`;