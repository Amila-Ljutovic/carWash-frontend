import React from "react";

//components
import Table from "../../../components/table/table";

//columns
import { COLUMNS } from './columns.js'
import { washingPrograms } from "../../../data";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

function WashingPrograms() {

    const [washingPrograms, setWashingPrograms] = useState();

    useEffect(()=>{
        axios.get('washing-programs/all').then((res) => {
            setWashingPrograms(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
        { washingPrograms ? 
            <Table data={washingPrograms} columns={COLUMNS} title={'Washing programs'} buttonLabel={'New washing program'} pathname={'washing-programs'}/>
            : false
        }
        </>
    );
}

export default WashingPrograms;