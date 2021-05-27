import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom'


export default function MenuItem(props) {
    const [selected, setSelected] = useState(3);
    const history = useHistory();

    const linkStyle = {
        cursor: 'pointer',
        color: selected === props.id ? '#F2994A' : '#828282',
        textAlign: 'left'
    };

    const handleClick = () => {
        setSelected(props.id);
        history.push(props.url);
    };

    return (
        <Container fluid>
            <Row className="py-2" onClick={()=>handleClick()}>
                <Col style={{alignContents: 'right'}} md={4}>
                    <img src={props.icon} alt={props.name}/>
                </Col>
                <Col md={8}>
                    <p style={linkStyle}>{props.name}</p>
                </Col>
            </Row>

        </Container>
    )
}