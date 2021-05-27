import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import map from '../../assets/images/maps/waste_report_map.png'

export default function Map(props) {
     useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <img src={map} alt={"wastemap"}/>
            </Row>
            <Row className="m-5">
                <button onClick={()=>props.setView('table')}>
                    Table view
                </button>
            </Row>
        </Container>
    )
}