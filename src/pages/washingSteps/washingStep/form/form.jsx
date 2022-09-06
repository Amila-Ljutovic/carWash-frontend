import React from "react";

//styled

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";

import { useNavigate, useParams } from "react-router-dom";

//api
import { createWashingStep } from "../../../../api/washingSteps";
import { updateWashingStep } from "../../../../api/washingSteps";

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
            updateWashingStep(id, data).then((res) => {
                navigate('/washing-steps')
            })
            .catch(err => console.log(err))
        }
        else {
            createWashingStep(data).then((res) => {
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