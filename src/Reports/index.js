import React, {useState} from 'react';
import PageTitle from "../General/PageTitle";
import Table from "../General/Table";
import Map from "../General/Map";
import Unreported from "../General/Unreported";
import sample from "../data/sample-data";

export default function Reports() {
    const tableColumns = ['Amount', 'Waste Composition', 'Waste Processor', 'Processing Method', 'Request Edit'];
    const [view, setView] = useState('table');

    return(
        <>
            <PageTitle title={"Waste Reports"}/>
            {view === 'table' ?
                <>
                    <Table
                        columns={tableColumns}
                        data = {sample}
                        setView={setView}
                        view={view}
                    />
                    <Unreported
                        columns={tableColumns}
                    />
                </>:
                <Map
                    setView={setView}
                    view={view}
                />}
        </>
    )
}