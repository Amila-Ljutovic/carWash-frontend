import React from "react";

//components
import WashingStepForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledEdit"

function EditWashingStep() {
    return ( 
        <FormWrapper>
            <Title>
                {'Edit washing step'}
            </Title>
            <WashingStepForm />
        </FormWrapper> 
    );
}

export default EditWashingStep;