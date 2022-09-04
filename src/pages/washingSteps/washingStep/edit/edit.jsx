import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

//components
import WashingStepForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledEdit"

function EditWashingStep() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(id) {
            axios.get(`washing-steps/${id}`).then((res) => {
                setData(res.data)
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
        <FormWrapper>
            <Title>
                {'Edit washing step'}
            </Title>
            { data
                ? <WashingStepForm data={data} setData={setData}/>
                : false
            }
        </FormWrapper> 
    );
}

export default EditWashingStep;