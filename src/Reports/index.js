import React from 'react';
import PageTitle from "../General/PageTitle";
import Table from "../General/Table";
import sample from "./sample-data";

export default function Reports() {
    const tableColumns = ['Amount', 'Waste Composition', 'Waste Processor', 'Processing Method', 'Request Edit'];

    return(
        <>
            <PageTitle title={"Waste Reports"}/>
            <Table
                columns={tableColumns}
                data = {sample}
            />
        </>
    )
}