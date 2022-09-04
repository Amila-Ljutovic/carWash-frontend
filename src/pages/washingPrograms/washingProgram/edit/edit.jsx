import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

//components
import WashingProgramForm from "../form/form";

//styled
import { FormWrapper, Title } from "./styledEdit"

function EditWashingProgram() {
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(id) {
            axios.get(`washing-programs/${id}`).then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
        }
    }, [id])

    return ( 
        <FormWrapper>
            <Title>
                {'Edit washing program'}
            </Title>
            { data
                ? <WashingProgramForm data={data} setData={setData} isEdit={true}/>
                : false
            }
        </FormWrapper> 
    );
}

export default EditWashingProgram;