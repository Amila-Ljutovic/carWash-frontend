import React from "react";

//styled

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";
import MultiSelect from "../../../../components/multiSelect/multiSelect";

import axios from 'axios'
import { useNavigate } from "react-router-dom";

function WashingProgramForm({data, setData, isEdit}) {
    const navigate = useNavigate()
    
    const onAddStep = (e) => {

    }

    const onRemoveStep = (index) => {

    }

    const onSubmit = () => {
       console.log('tu');
    }
    return ( 
        <>
            <Input required={true} disabled={false} label={'Name'} value={data.name} placeholder={''} />
            <Input required={true} disabled={false} label={'Price'} type={'number'} value={data.price} placeholder={''} />
            <MultiSelect label={'Washing steps'} list={data.washingSteps} ></MultiSelect>
            <SaveCancelButtons path={'washing-programs'} onSubmit={onSubmit}/>
        </> 
    );
}

export default WashingProgramForm;