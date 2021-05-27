import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default function Entry(props) {

    const rowStyle = {
        background: props.selected === props.entry.id ? '#3D3D3D': '#282828',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '5px',
        color: '#E5E5E5',
        cursor: 'pointer',
        height: '5.8vh'
    };

    return (
        <Row
            className="my-2 py-2 mx-3"
            style={rowStyle}
            onClick = {()=> props.setSelected(props.entry.id)}
        >
            {props.columns.map(
                column => <Col>
                    {props.entry[column]}
                </Col>
            )}
        </Row>
    )
}