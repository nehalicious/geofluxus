import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import arrow from '../../assets/images/icons/arrow.png';

export default function PageTitle(props) {

    const logoStyle = {
        color: '#7AA5A9',
        fontWeight: 'bold',
        fontSize: '5vh'
    };

    const subtitleStyle ={
        color: ' #E5E5E5',
        fontSize: '2.3vh'
    };

    return (
        <Navbar className="px-0">
            <Navbar.Brand
                className="pl-5"
            >
                <Row style={logoStyle}>
                    {props.title}
                </Row>
                <Row style={subtitleStyle}>
                    <Col>
                        <img src={arrow} alt={"arrow"}/>
                    </Col>
                    <Col>
                        <p> Choose time period: </p>
                    </Col>
                    <Col>
                        <p style={{color:  '#F2994A'}}> 2018 </p>
                    </Col>

                </Row>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end pr-3">
                <Form inline>
                    <Form.Control
                        style={{borderRadius: '30px', background: '#656565', width: '20vw', color: '#000000', outline: 'none'}}
                        type="text"
                        className="mr-sm-2" >
                        {/*<img src={search} alt={"search"}/>*/}
                    </Form.Control>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}