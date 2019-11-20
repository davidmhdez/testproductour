import React,{Component} from 'react';
import styled from 'styled-components';

export default class List extends Component {

    render() {
        return (
            <ListContainer>
                {elements.map((element, key) => <ItemList id={element} key={key} >{element}</ItemList>)}
            </ListContainer>
        );
    }
}

const elements = ['item 1','item 2','item 3','item 4','item 5','item 6'];

const ListContainer = styled.ul`
    padding: 10px;
`;

const ItemList = styled.li`
    padding: 3px;
    color: white;
    font-weight: bold;
`;