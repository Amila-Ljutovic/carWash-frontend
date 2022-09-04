import React from "react";
import { useState } from "react";

//components
import CustomersForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledCreate";

function CreateCustomer() {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        phone_number: '',
        gender: 'Male',
        number_of_washs: 0
    })

    return ( 
        <FormWrapper>
            <Title>
                {'Create new customer'}
            </Title>
            <CustomersForm data={data} setData={setData}/>
        </FormWrapper> 
    );
}
    
export default CreateCustomer;