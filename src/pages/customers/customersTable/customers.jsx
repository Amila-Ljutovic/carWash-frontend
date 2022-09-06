import React from "react";

//components
import Table from "../../../components/table/table";

//columns
import { COLUMNS } from './columns.js'
import { useEffect } from "react";
import { useState } from "react";

//api
import { getCustomers } from "../../../api/customers";

function Customers() {

    const [customers, setCustomers] = useState();

    useEffect(()=>{
        getCustomers().then((res) => {
            setCustomers(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
        { customers ? 
            <Table data={customers} columns={COLUMNS} title={'Customers'} buttonLabel={'New customer'} pathname={'customers'}/>
            : false
        }
        </>
    );
}

export default Customers;