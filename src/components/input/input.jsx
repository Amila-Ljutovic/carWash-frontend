import React from "react";

//styled
import { Wrapper, Label, StyledInput, InputWrapper, InputWrapperDisabled } from "./styledInput"
 
function Input({ type='text', value, label, disabled, placeholder, onChange, required }) {
    return (
        <Wrapper>
            <Label>{label}</Label>
            {
                !disabled 
                ? <InputWrapper>
                    <StyledInput 
                        type={type}
                        value={value}
                        disabled={disabled}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </InputWrapper>
                : <InputWrapperDisabled>
                    <StyledInput 
                        type={type}
                        value={value}
                        disabled={disabled}
                        placeholder={placeholder}
                        onChange={(e) => onChange(e.target.value)}
                    />
                </InputWrapperDisabled>
            }
        </Wrapper>
    );
}

export default Input;