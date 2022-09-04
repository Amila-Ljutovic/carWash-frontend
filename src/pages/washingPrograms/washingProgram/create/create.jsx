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
        washingSteps: [
            {
                id:1,	
                name: 'test',	
                duration: 3,
                substance: 'water'
            },
            {
                id: 2,
                name: 'amila',
                duration: 3,
                substance: 'test',
             },
            {
                id: 3,
                name: 'test',
                duration: 4,
                substance: 'water'
            }
        ]
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