import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ReactLogo from '../app/assets/img/reactlogo.png';

const Header = () => {
    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={ReactLogo} alt='React Logo' />
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;