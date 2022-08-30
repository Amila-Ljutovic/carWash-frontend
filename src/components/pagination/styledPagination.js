import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 1rem;
    align-items: center;
    text-align: center;
`;

export const Button = styled.button`
    background: transparent;
    border: 1px solid #c0bcce;
    padding: 3px 10px;
    border-radius: 3px;
    color: #2e205d;
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        cursor: default;
        color: #c0bcce;
    }
`;

export const NumberOfPages = styled.div`
    margin: 0 5px;
`;

export const PageIndex = styled.div`
    margin: 0 5px;
    font-weight: 500;
    font-size: 19px;
`;