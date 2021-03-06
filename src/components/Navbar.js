import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <Navigation>
                <div>
                    <NavLink  to={'/'}>Home</NavLink>
                </div>
                <div>
                    <NavLink id="nextPage" to={'/page2'}>Next page</NavLink>
                </div>
            </Navigation>
        );
    }
}

const Navigation = styled.div`
    width: 100%;
    background-color: purple;
    color: white;
    display: flex;
    
    > div{
        padding: 20px;
    }

    > div:hover{
        background-color: blue;
    }
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
`;