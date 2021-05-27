import React from 'react';
import Container from 'react-bootstrap/Container';
import menu from './data/menu-item';
import MenuItem from "./MenuItem";

export default function Sidebar() {
    const sidebarStyle = {
        background: '#282828',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '5px',
        minHeight: '100%'
    };
    return (
        <Container style={sidebarStyle} fluid>
            {menu.map(x=>
                <MenuItem name={x.name}/>
            )}
        </Container>
    )
}