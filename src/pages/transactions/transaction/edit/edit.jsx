import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

//components
import TransactionForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledEdit"

//api
import { getTransactionById } from "../../../../api/transactions";

function EditTransaction() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(id) {
            getTransactionById(id).then((res) => {
                setData(res.data)
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
        <FormWrapper>
            <Title>
                {'Transaction preview'}
            </Title>
            { data
                ? <TransactionForm data={data} setData={setData} isEdit/>
                : false
            }
        </FormWrapper> 
    );
}

export default EditTransaction;