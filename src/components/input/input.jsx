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
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                />
            </InputWrapper>
        </Wrapper>
    );
}

export default Input;