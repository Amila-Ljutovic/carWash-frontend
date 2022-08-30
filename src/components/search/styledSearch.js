import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    margin-top: 7px;
    margin-left: 15px;
    border-left: 1px solid #2e205d;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 4px;
`;

export const Icon = styled.div`
    font-size: 23px;
    color: #2e205d;
    &:hover {
        cursor: pointer;
    }
   
`;

export const Input = styled.input`
    border: none;
    background-color: transparent;
    margin-left: 6px;
    width: ${(props) => props.visible ? '100%' : '0%'};
    border-bottom: ${(props) => props.visible ? '1px solid #2e205d' : 'none'};
    transition: width 400ms ease;
   
    &::placeholder {
        color: ${(props) => props.visible ? '#2e205d' : 'transparent'};
    }
    &:focus{
        outline: none;
    }
`;