import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";

export default function ImpactBox(props) {

    const logoStyle = {
        color: '#7AA5A9',
        fontWeight: 'bold',
        fontSize: '4vh'
    };

    const subtitleStyle ={
        color: ' #E5E5E5',
        fontSize: '2.3vh'
    };
    return (
        <Container fluid className="px-5 my-5">
            <Row style={logoStyle}>
                {props.title}
            </Row>
            <Row style={subtitleStyle}>
                <p className="pr-3"> Choose indicator: </p>
                <p style={{color:  '#F2994A'}}> {props.indicators[0]} </p>
            </Row>
            <Row>
                <img
                    style={{cursor: 'pointer', width: '100%'}}
                    onClick = {()=>{
                        props.setSelected(props.data);
                        props.setView('detail')}}
                    src={props.map}
                />
            </Row>
        </Container>
    )
}