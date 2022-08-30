import React from "react";

//components
import Table from "../../../components/table/table";

//columns
import { COLUMNS } from './columns.js'
import { washingSteps } from "../../../data";

function WashingSteps() {
    return ( 
        <Table data={washingSteps} columns={COLUMNS} />
    );
}

export default WashingSteps;