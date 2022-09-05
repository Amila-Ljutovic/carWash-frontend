import React from "react";

//styled
import { Label } from "../../../../components/input/styledInput";
import { SelectWrapper } from "./styledForm"

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";
import Select from 'react-select';

import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function TransactionForm({data, setData, isEdit}) {
    const navigate = useNavigate()
    const [customers, setCustomers] = useState()
    const [washingPrograms, setWashingPrograms] = useState()
    const [price, setPrice] = useState()
    const [discount, setDiscount] = useState()
    const [isPriceSet, setIsPriceSet] = useState(false)

    useEffect(() => {
        axios.get('customers/all').then((res) => {
            setCustomers(res.data.map((item) => { 
                return {
                ...item,
                value: item.id,
                label: item.first_name + ' ' + item.last_name
                } 
            }));
        }).catch(err => console.log(err))
        axios.get('washing-programs/all').then((res) => {
            setWashingPrograms(res.data.map((item) => { 
                return {
                ...item,
                value: item.id,
                label: item.name
                } 
            }));
        }).catch(err => console.log(err))
        
    }, [])

    useEffect(() => {
        if(data.customer_id && data.washing_program_id && !isEdit && !isPriceSet)
        {
            let numberOfWashs = customers.find(customer => customer.id === data.customer_id).washing_number
            let price = washingPrograms.find(washingProgram => washingProgram.id === data.washing_program_id).price
            if((numberOfWashs + 1) % 10 === 0 ){
                setPrice(price - (price * .3))
                setDiscount('Yes')
            }
            else {
                setPrice(price)
                setDiscount('No')
            }
        }
    }, [data])

   useEffect(() => {
        if(price && discount) {
            console.log(price, 'pricee')
            setData({
                ...data,
                price: price,
                discount: discount === 'Yes' ? 1 : 0
            })
            setIsPriceSet(true)
        }
   }, [price, discount])

    const onChangeCustomer = (e) => {
        setData({...data, customer_id: e.value})
    }

    const onChangeWashingProgram = (e) => {
        setData({...data, washing_program_id: e.value})
    }

    const onSubmit = () => {
        if(isEdit) {
            
        }
        else {
            axios.post('transactions/create', data).then((res) => {
                navigate('/transactions')
            })
            .catch(err => console.log(err))
        }
    }
    
    return ( 
        <>  
            { customers && washingPrograms &&  
            <>
                <SelectWrapper>
                    <Label>{'Customer'}</Label>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={isEdit}
                        defaultValue={ isEdit ? {label: data.customer.first_name + ' ' + data.customer.last_name, value: data.id} : null}
                        isSearchable
                        name="customer"
                        options={customers}
                        onChange={(e) => onChangeCustomer(e)}
                        />
                </SelectWrapper>
                <SelectWrapper>   
                    <Label>{'Washing program'}</Label>
                    <Select
                        className="basic-single"
                        classNamePrefix="select"
                        isDisabled={isEdit}
                        defaultValue={ isEdit ? {label: data.washing_program.name, value: data.id} : null}
                        isSearchable
                        name="washing-program"
                        options={washingPrograms}
                        onChange={(e) => onChangeWashingProgram(e)}
                        />
                </SelectWrapper>
                {
                   isEdit && 
                   <Input required disabled={isEdit} label={'Date & Time'} value={data.created_at} placeholder={''}/>
                }
                {   isEdit || (data.customer_id && data.washing_program_id) 
                    ? <>
                        <Input required disabled label={'Price'} type={'number'} value={data.price} placeholder={''} />
                        <Input required disabled label={'Discount included'} value={data.discount ? 'Yes': 'No'} placeholder={''} />
                    </>
                    : false
                }
                <SaveCancelButtons path={'transactions'} onSubmit={onSubmit} isReadOnly={isEdit}/>
            </>
            }
            
        </> 
    );
}

export default TransactionForm;