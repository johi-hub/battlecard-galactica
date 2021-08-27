import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    height: 60px;
    background: #000;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const homepage = () => {
    return <Navbar>
        {/* <Logo to="/homepage">hoepage</Logo>
        <NavItems>
            <NavbarLink to="/">Hoeepage</NavbarLink>
        </NavItems> */}
    </Navbar>
}

export default homepage
