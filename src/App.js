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
    <Container className="App" fluid>
        <Header/>
        <Row>
          <Col>
            <Sidebar/>
          </Col>
          <Col>
            <Routes/>
          </Col>
        </Row>
    </Container>
  );
}

export default App;
