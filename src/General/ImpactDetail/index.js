import React, {useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImpactBox from "../ImpactBox";

import processing from '../../assets/images/graphs/processing.png';
import timeline from '../../assets/images/graphs/timeline.png'

export default function ImpactDetail(props) {
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    const getGraph = (heading, image) => {
        return (
            <Container>
                <Row style={{color: '#FFFFFF'}}>
                    {heading}
                </Row>
                <Row>
                    <img src={image} alt={heading}/>
                </Row>
            </Container>
        )
    };

    return (
        <Container>
            <Row>
                <Col style={{maxWidth: '60%'}}>
                    <ImpactBox
                        data={props.data}
                        title={props.data.name}
                        indicators={props.data.indicators}
                        map={props.data.map}
                        setView={props.setView}
                        setSelected={props.setSelected}
                    />
                </Col>
                <Col className="mt-4">
                    {getGraph("Treatment Timeline", timeline)}
                    {getGraph("Processing Methods", processing)}
                </Col>
            </Row>
        </Container>
    )
}