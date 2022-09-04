import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import * as AiICons from "react-icons/ai"

//components
import Select from 'react-select';

//styled
import { Label, Wrapper, CloseButton, SelectWrapper, SelectRemoveWrapper } from "./styledMultiSelect";

function MultiSelect({label, list}) {

    const [options, setOptions] = useState()

    useEffect(() => {
        axios.get('washing-steps/all').then((res) => {

            let response = res.data.map((item) => {
                return {
                    value: item.id,
                    label: item.name
                }
            })
            setOptions(response)
        }).catch(err => console.log(err))

    }, [])
    return ( 
        <>
        { options ?
            <Wrapper>
                <Label>{label}</Label>
                
                {
                    list.map((item, index) => {
                        console.log(item, 'item')
                        console.log(options, 'options')
                        return (
                            <SelectRemoveWrapper key={index}>
                                <SelectWrapper>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    style={{width: '100%'}}
                                    defaultValue={{value: item.id, label: item.name}}
                                    name="step"
                                    options={options}
                                    />
                                    </SelectWrapper>
                                <CloseButton>
                                    <AiICons.AiFillCloseCircle></AiICons.AiFillCloseCircle>
                                </CloseButton>
                            </SelectRemoveWrapper>
                        )
                    })
                }
            </Wrapper> 
            : false
        }
        </> 
    );
}

export default MultiSelect;