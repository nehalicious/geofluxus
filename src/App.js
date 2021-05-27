import React from 'react';
import './App.css';
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Routes from "./Routes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function App() {
  return (
    <Container className="App m-0 p-0" fluid>
        <Header/>
        <Row className="App m-0 p-0" noGutters={true}>
          <Col md={2}>
            <Sidebar/>
          </Col>
          <Col md={10}>
            <Routes/>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
