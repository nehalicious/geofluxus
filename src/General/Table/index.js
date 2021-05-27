import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Entry from './Entry';

export default function Table(props) {
    useEffect(()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    const rowsPerPage = 3;
    const numpages = Math.ceil(props.data.length/rowsPerPage);

    const [selected, setSelected] = useState(null);
    const [currentPage, setPage] = useState(1);
    const display = props.data.slice(currentPage * rowsPerPage -3, (currentPage * rowsPerPage));


    const getNumberBox = (x) => {
        return (
            <div
                className="numberBox mr-3"
                style={{
                    background: currentPage === x? '#8E8E8E': '#0F0F0F',
                    color:currentPage === x? '#0F0F0F':  '#8E8E8E'
                }}
                onClick = {()=> setPage(x)}
            >
                {x}
            </div>
        )
    };

    const getPageNumbers = () => {
        console.log(props.data);
        let pages = [];
        for(let i = 1; i<=numpages; i++) {
            pages.push(i);
        }
        return pages.map(x=>getNumberBox(x))
    };

    return (
        <Container>
            <Row>
                {props.columns.map(x=><Col style={{color: '#E5E5E5'}}> {x} </Col>)}
            </Row>
            <hr
                style={{
                    borderTop: '1px solid #E5E5E5',
                    height: '1px'
                }}
            />

            {display.map(entry=>
                <Entry
                    selected={selected}
                    setSelected={setSelected}
                    columns={props.columns}
                    entry={entry}
                />
            )}


            <Row className="py-4">
                <Col className="px-5" style={{width: '100%', textAlign: 'left'}}>
                    {props.view === 'table'?
                        <button onClick={()=>props.setView('map')}>
                            Map View
                        </button>:
                        null}
                </Col>
                <Col>
                    <Row className="justify-content-end px-5">
                        {getPageNumbers()}
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}