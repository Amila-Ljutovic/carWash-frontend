import styled from "styled-components";

export const Label = styled.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #82799e;    
`;

export const Wrapper = styled.div`
    width: 30%;
`;

export const RemoveButton = styled.div`
    font-size: 14px;
    color: #2e205d;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
        
    }
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
`;

export const Item = styled.div`
    background-color: #a0ba45;
    padding: 10px 32px;
    width: 80px;
    text-align: center;
    margin-top: 5px;
    border-radius: 12px;
    color: white;
    margin-right: 5px;
    margin-bottom: 2px;
    font-size: 14px;

`;

export const NoStepsSelected = styled.div`

`;

export const AddStepButton = styled.div`
    background-color: lightgray;
    width: fit-content;
    padding: 5px 14px;
    border-radius: 5px;
    margin-top: 16px;
`;

export const SelectWrapper = styled.div`
    
`;