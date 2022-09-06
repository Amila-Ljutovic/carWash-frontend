import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

//components
import CustomerForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledEdit"

//api
import { getCustomerById } from "../../../../api/customers";

function EditCustomer() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(id) {
            getCustomerById(id).then((res) => {
                setData(res.data)
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
        <FormWrapper>
            <Title>
                {'Edit customer'}
            </Title>
            { data
                ? <CustomerForm data={data} setData={setData} isEdit={true}/>
                : false
            }
        </FormWrapper> 
    );
}

export default EditCustomer;