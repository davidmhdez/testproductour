import React,{Component} from 'react';
import styled from 'styled-components';

export default class Field extends Component {

    render() {
        return (
            <InputContainer>
                <InputTitle>Field</InputTitle>
                <Input/>
            </InputContainer>
        );
    }
}

const InputContainer = styled.div`
    padding: 5px;
`;

const Input = styled.input`
    padding: 2px;
`;

const InputTitle = styled.label`
    font-size: 24px;
    margin-bottom: 10px;
`;