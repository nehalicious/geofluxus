import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import error from '../assets/images/error/error.jpeg'

export default function Error() {
    return (
        <Container>
            <Row className="justify-content-center">
                <h3 style={{color: '#FFFFFF'}}>
                    I didn't have any information about what to put here
                </h3>
            </Row>
            <Row className="justify-content-center">
                <p style={{color: '#FFFFFF'}}>
                    So check out some lazy pandas pictures instead
                </p>
            </Row>
            <Row className="justify-content-center">
                <img style={{maxHeight: '60vh'}} src ={error}/>
            </Row>

        </Container>
    )
}