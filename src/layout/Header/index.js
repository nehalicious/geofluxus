import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import logo from '../../assets/images/logo.png'

export default function Header() {
    const headerContainerStyle = {
        width : '100%',
        height: '9vh',
        background: '#313131'
    };

    const logoStyle = {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '4vh',
        cursor: 'pointer',
    };

    const linkStyle = {
        color: '#E5E5E5',
        cursor: 'pointer'
    };

    return (
        <Navbar style={headerContainerStyle} className="px-0">
            <Navbar.Brand
                className="pl-1"
            >
                <Row style={logoStyle}>
                    <img src={logo} alt="geofluxus"/>
                </Row>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end pr-3">
            <Nav>
                <Nav.Link style={linkStyle}>Sign Out</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
