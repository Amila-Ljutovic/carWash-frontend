import React from "react";

//components
import Table from "../../../components/table/table";

//columns
import { COLUMNS } from './columns.js'
import { useEffect } from "react";
import axios from 'axios'
import { useState } from "react";

function Transactions() {

    const [transactions, setTransactions] = useState();

    useEffect(()=>{
        axios.get('transactions/all').then((res) => {
            setTransactions(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <>
        { transactions ? 
            <Table data={transactions} columns={COLUMNS} title={'Transactions'} buttonLabel={'New transaction'} pathname={'transactions'}/>
            : false
        }
        </>
    );
}

export default Transactions;