import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import ReactLogo from './app/assets/img/reactlogo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={ReactLogo} alt='React Logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            I'm ready for workshop!!
        </div>
    );
}

export default App;

