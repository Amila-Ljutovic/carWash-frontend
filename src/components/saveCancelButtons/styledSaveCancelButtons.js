import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const Button = styled.div`
    padding: 5px;
    background-color: ${(props) => props.isCancel ? '#D11A2A' : '#2e205d'};
    border-radius: 4px;
    width: 81px;
    text-align: center;
    padding: 10px 0;
    color: white;
    margin-left: ${(props) => props.isCancel ? '10px' : '0'};
    &:hover {
        cursor: pointer;
        opacity: 0.8;        
    }
`;