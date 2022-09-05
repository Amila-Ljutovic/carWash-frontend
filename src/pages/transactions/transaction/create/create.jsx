import React from "react";
import { useState, useEffect } from "react";

//components
import TransactionForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledCreate";

function CreateTransaction() {
    const [data, setData] = useState({
        customer_id: null,
        washing_program_id: null,
        discount: null,
        price: ''
    })

    return ( 
        <FormWrapper>
            <Title>
                {'Create new Transaction'}
            </Title>
            <TransactionForm data={data} setData={setData}/>
        </FormWrapper> 
    );
}
    
export default CreateTransaction;