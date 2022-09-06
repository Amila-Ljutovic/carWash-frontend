import React from "react";

//styled

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";
import StepsSelect from "../../../../components/stepsSelect/stepsSelect";

import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

//api
import { updateWashingProgram } from "../../../../api/washingPrograms";
import { createWashingProgram } from "../../../../api/washingPrograms";

function WashingProgramForm({data, setData, isEdit}) {
    const navigate = useNavigate()
    const { id } = useParams()

    const onAddStep = (step) => {
        setData({...data, washing_steps: [...data.washing_steps, step]})
    }

    const onRemoveStep = (id) => {
        setData({...data, washing_steps: data.washing_steps.filter(item => item.id !== id)})
    }

    const onChangeName = (e) => {
        setData({...data, name: e})
    }

    const onChangePrice = (e) => {
        setData({...data, price: e})
    }

    const onSubmit = () => {
        if(isEdit) {
            updateWashingProgram(id, {
                name: data.name,
                price: data.price,
                stepsIds: data.washing_steps.map(item => item.id)
            }).then((res) => {
                navigate('/washing-programs')
            })
            .catch(err => console.log(err))
        }
        else {

            createWashingProgram( {
                name: data.name,
                price: data.price,
                stepsIds: data.washing_steps.map(item => item.id)
            }).then((res) => {
                navigate('/washing-programs')
            })
            .catch(err => console.log(err))
        }
    }
    return ( 
        <>
            <Input required={true} disabled={false} label={'Name'} value={data.name} placeholder={''} onChange={onChangeName}/>
            <Input required={true} disabled={false} label={'Price'} type={'number'} value={data.price} placeholder={''} onChange={onChangePrice}/>
            <StepsSelect label={'Washing steps'} list={data.washing_steps} onRemove={onRemoveStep} onAdd={onAddStep}></StepsSelect>
            <SaveCancelButtons path={'washing-programs'} onSubmit={onSubmit}/>
        </> 
    );
}

export default WashingProgramForm;