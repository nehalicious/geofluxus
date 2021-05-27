import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Entry from './Entry'

export default function Table(props) {
    const rowsPerPage = 3;
    const numpages = Math.ceil(props.data.length/rowsPerPage);

    const [selected, setSelected] = useState(null);
    const [currentPage, setPage] = useState(1);
    const display = props.data.slice(currentPage * rowsPerPage -3, (currentPage * rowsPerPage));


    const getNumberBox = (x) => {
        return (
            <div
                className="numberBox mr-3"
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
                <Col>
                    <button>
                        Map View
                    </button>
                </Col>
                <Col style={{alignContent: 'right', width: '100%'}}>
                    <Row>
                        {getPageNumbers()}
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}