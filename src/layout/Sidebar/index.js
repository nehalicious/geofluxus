import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import menu from './data/menu-item';
import MenuItem from "./MenuItem";

export default function Sidebar() {
    const [selected, setSelected] = useState(3);

    const sidebarStyle = {
        background: '#282828',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '5px',
        minHeight: '100%'
    };
    return (
        <Container style={sidebarStyle}>
            <div className="pt-5">
            {menu.map(x=>
                <MenuItem
                    name={x.name}
                    icon={x.icon}
                    url={x.url}
                    id={x.id}
                    selected={selected}
                    setSelected={setSelected}/>
            )}
            </div>
        </Container>
    )
}