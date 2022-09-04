import React from "react";

//styled

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";

import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function WashingStepForm({data, setData, isEdit}) {
    const navigate = useNavigate()
    const { id } = useParams()

    const onChangeName = (e) => {
        setData({...data, name: e})
    }

    const onChangeDuration = (e) => {
        setData({...data, duration: e})
    }

    const onChangeSubstance = (e) => {
        setData({...data, substance: e})
    }

    const onSubmit = () => {
        if(isEdit) {
            axios.put(`washing-steps/${id}`, data).then((res) => {
                navigate('/washing-steps')
            })
            .catch(err => console.log(err))
        }
        else {
            axios.post('washing-steps/create', data).then((res) => {
                navigate('/washing-steps')
            })
            .catch(err => console.log(err))
        }
    }
    
    return ( 
        <>
            <Input required={true} disabled={false} label={'Name'} value={data.name} placeholder={''} onChange={onChangeName}/>
            <Input required={true} disabled={false} label={'Duration'} type={'number'} value={data.duration} placeholder={''} onChange={onChangeDuration}/>
            <Input required={true} disabled={false} label={'Substance'} value={data.substance} placeholder={''} onChange={onChangeSubstance}/>
            <SaveCancelButtons path={'washing-steps'} onSubmit={onSubmit}/>
        </> 
    );
}

export default WashingStepForm;