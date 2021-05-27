import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Unreported(props) {
    const headingStyle = {
        color: '#7AA5A9',
        fontWeight: 'bold',
        fontSize: '5vh',
        opacity: 0.5
    };

    const unreportedBoxStyle = {
        background: '#282828',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        minHeight: '30vh',
    };

    return (
        <Container>
            <Row className="pl-5 py-3" style={headingStyle}>
                Unreported
            </Row>
            <Row>
                {props.columns.map(x=><Col style={{color: '#E5E5E5'}}> {x} </Col>)}
            </Row>
            <hr
                style={{
                    borderTop: '1px solid #E5E5E5',
                    height: '1px'
                }}
            />
            <Container className="my-3" style={unreportedBoxStyle}>
                <Row style={{color: '#E5E5E5', paddingTop: '9vh'}} className="justify-content-md-center">
                    No new unreported waste material data submitted yet...
                </Row>
                <Row className="justify-content-md-center py-3">
                    <button>
                        Add new material data
                    </button>
                </Row>
            </Container>
        </Container>
    )
}