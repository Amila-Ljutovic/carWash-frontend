import React from "react";

//styled
import { Wrapper, Label, StyledInput, InputWrapper } from "./styledInput"
 
function Input({ type='text', value, label, disabled, placeholder, onChange, required }) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper>
                <StyledInput 
                    type={type}
                    
                    disabled={disabled}
                    placeholder={placeholder}
                   
                />
            </InputWrapper>
        </Wrapper>
    );
}

export default Input;