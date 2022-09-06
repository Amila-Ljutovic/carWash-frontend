import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import * as AiICons from "react-icons/ai"

//components
import Select from 'react-select';

//styled
import { Label, Wrapper, RemoveButton, Item, ListItem, NoStepsSelected, AddStepButton, SelectWrapper, AddNewWrapper } from "./styledStepsSelect";

//api
import { getWashingSteps } from "../../api/washingSteps";

function StepsSelect({label, list, onRemove, onAdd}) {

    const [stepsList, setStepsList] = useState()
    const [options, setOptions] = useState()
    const [isAddButtonVisible, setIsAddButtonVisible] = useState(true)

    useEffect(() => {
        getWashingSteps().then((res) => {
            setStepsList(res.data)
            let response = res.data.map((item) => {
                return {
                    value: item.id,
                    label: item.name
                }
            })
            setOptions(response)
        }).catch(err => console.log(err))

    }, [])

    const addNewStep = (e) => {
        let step = stepsList.find(item => item.id === e.value)
        onAdd(step)
        setIsAddButtonVisible(true)
    }

    return ( 
        <>
        { options ?
            <Wrapper>
                <Label>{label}</Label>
                {   !list.length 
                    ? <NoStepsSelected>{'No steps selected.'}</NoStepsSelected>
                    : <>
                        {
                            list.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Item>
                                            {item.name}
                                        </Item>
                                        <RemoveButton onClick={() => onRemove(item.id)}>
                                            {'Remove'}
                                        </RemoveButton>
                                    </ListItem>
                                )
                            })
                        }
                    </>
                }
                {   isAddButtonVisible
                    ? <AddStepButton onClick={() => setIsAddButtonVisible(false)}>{'Add new step'}</AddStepButton>
                    : <AddNewWrapper>
                        <SelectWrapper>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                isSearchable={true}
                                name="step"
                                options={options}
                                onChange={(e) => addNewStep(e)}
                                />
                        </SelectWrapper>
                        <RemoveButton onClick={() => setIsAddButtonVisible(true)}>
                            {'Remove'}
                        </RemoveButton>
                    </AddNewWrapper>
                }
            </Wrapper> 
            : false
        }
        </> 
    );
}

export default StepsSelect;