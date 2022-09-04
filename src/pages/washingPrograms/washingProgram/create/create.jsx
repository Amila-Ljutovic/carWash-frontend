import React from "react";
import { useState, useEffect } from "react";

//components
import WashingProgramForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledCreate";

function CreateWashingProgram() {
    const [data, setData] = useState({
        name: '',
        price: '',
        washing_steps: []
    })



    return ( 
        <FormWrapper>
            <Title>
                {'Create new washing program'}
            </Title>
            <WashingProgramForm data={data} setData={setData} />
        </FormWrapper> 
    );
}
    
export default CreateWashingProgram;