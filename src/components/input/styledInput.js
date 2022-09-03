import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 10px;
    width: 30%;
`;

export const Label = styled.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #82799e;
`;

export const StyledInput = styled.input`
    border: none;
    height: 25px;
    font-size: 16px;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export const InputWrapper = styled.div`
    background: white;
    width: 100%;
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 3px;
    &:focus-within {
        border: 1px solid darkgray;
    }
`;