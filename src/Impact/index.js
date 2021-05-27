import React, {useState, useEffect} from 'react';
import PageTitle from "../General/PageTitle";
import Table from '../General/Table';
import data from '../data/sample-data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ImpactBox from "../General/ImpactBox";
import impact from '../data/impact'
import ImpactDetail from "../General/ImpactDetail";

export default function Impact() {
    const tableColumns = ['Amount', 'Waste Composition', 'Waste Processor', 'Processing Method', 'Distance'];
    const [view, setView] = useState('overview');
    const [selected, setSelected] = useState(null);

    useEffect(()=> {setView('overview')}, []);

    return (
        <>
            {view === 'overview' ?
                <>
                    <PageTitle title={"Total Waste Impact"}/>
                    <Table columns={tableColumns} data={data}/>
                    <Row>
                        {impact.map(x=>
                            <Col>
                                <ImpactBox
                                    data={x}
                                    title={x.name}
                                    indicators={x.indicators}
                                    map={x.map}
                                    setView={setView}
                                    setSelected={setSelected}
                                /></Col>)}
                    </Row>
                </>:
                <ImpactDetail data={selected} setView={setView}
                                    setSelected={setSelected}/>
            }
        </>
    )
}