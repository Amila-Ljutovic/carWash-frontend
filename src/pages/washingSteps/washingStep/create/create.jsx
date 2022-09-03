import React from "react";

//components
import WashingStepForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledCreate";

function CreateWashingStep() {
    return ( 
        <FormWrapper>
            <Title>
                {'Create new washing step'}
            </Title>
            <WashingStepForm />
        </FormWrapper> 
    );
}
    
export default CreateWashingStep;