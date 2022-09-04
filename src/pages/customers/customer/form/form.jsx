import React from "react";

//styled
import { GenderGroup, Label, Radio } from "./styledForm"

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";

import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

function CustomerForm({data, setData, isEdit}) {
    const navigate = useNavigate()
    const { id } = useParams()

    const onChangeFirstName = (e) => {
        setData({...data, first_name: e})
    }

    const onChangeLastName = (e) => {
        setData({...data, last_name: e})
    }

    const onChangePhoneNumber = (e) => {
        setData({...data, phone_number: e})
    }

    const onChangeGender = (e) => {
        setData({...data, gender: e.target.value})
    }

    const onSubmit = () => {
        if(isEdit) {
            axios.put(`customers/${id}`, data).then((res) => {
                navigate('/customers')
            })
            .catch(err => console.log(err))
        }
        else {
            axios.post('customers/create', data).then((res) => {
                navigate('/customers')
            })
            .catch(err => console.log(err))
        }
    }
    
    return ( 
        <>
            <Input required={true} disabled={false} label={'First name'} value={data.first_name} placeholder={''} onChange={onChangeFirstName}/>
            <Input required={true} disabled={false} label={'Last name'} value={data.last_name} placeholder={''} onChange={onChangeLastName}/>
            <Input required={true} disabled={false} label={'Phone number'} value={data.phone_number} placeholder={''} onChange={onChangePhoneNumber}/>
            <GenderGroup>
                <Label>{'Gender'}</Label>
                <div onChange={onChangeGender}>
                    <Radio type="radio" value="Male" name="gender" checked={data.gender === 'Male'}/> Male
                    <Radio type="radio" value="Female" name="gender" checked={data.gender === 'Female'}/> Female
                </div>
            </GenderGroup>
            <Input required={true} disabled={true} label={'Number of washes'} value={data.number_of_washs} placeholder={''} onChange={onChangePhoneNumber}/>
            <SaveCancelButtons path={'customers'} onSubmit={onSubmit}/>
        </> 
    );
}

export default CustomerForm;