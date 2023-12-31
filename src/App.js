import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesList from './features/campsites/CampsitesList';
import { CAMPSITES } from './app/shared/CAMPSITES';

function App() {
    return (
        <div className="App">
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;

