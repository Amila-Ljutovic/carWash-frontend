import React from "react";
import { useState, useEffect } from "react";

//components
import WashingStepForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledCreate";

function CreateWashingStep() {
    const [data, setData] = useState({
        name: '',
        duration: '',
        substance: ''
    })

    return ( 
        <FormWrapper>
            <Title>
                {'Create new washing step'}
            </Title>
            <WashingStepForm data={data} setData={setData}/>
        </FormWrapper> 
    );
}
    
export default CreateWashingStep;