import React from "react";

//components
import Table from "../../../components/table/table";

//columns
import { COLUMNS } from './columns.js'
import { washingSteps } from "../../../data";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

function WashingSteps() {

    const [washingSteps, setWashingSteps] = useState();

    useEffect(()=>{
        axios.get('washing-steps/all').then((res) => {
            setWashingSteps(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
        { washingSteps ? 
            <Table data={washingSteps} columns={COLUMNS} title={'Washing steps'} buttonLabel={'New washing step'} pathname={'washing-steps'}/>
            : false
        }
        </>
    );
}

export default WashingSteps;