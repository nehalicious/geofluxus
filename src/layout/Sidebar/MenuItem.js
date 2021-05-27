import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {useHistory} from 'react-router-dom'


export default function MenuItem(props) {
    const history = useHistory();

    const linkStyle = {
        cursor: 'pointer',
        color: props.selected === props.id ? '#F2994A' : '#828282',
        textAlign: 'left'
    };

    const handleClick = () => {
        props.setSelected(props.id);
        history.push(props.url);
    };

    return (
        <Container fluid>
            <Row className="pt-3" onClick={()=>handleClick()}>
                <Col style={{alignContents: 'right'}} md={4}>
                    <img src={props.icon} alt={props.name}/>
                </Col>
                <Col md={8}>
                    <p style={linkStyle}>{props.name}</p>
                </Col>
            </Row>
            <hr
                style={{
                    borderTop: '1px solid #828282',
                }}
            />

        </Container>
    )
}