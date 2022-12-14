import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Label = styled.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #82799e;    
`;

export const Wrapper = styled.div`
    width: 30%;
    @media ${device.tablet} {
        width: 100%;
    }
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
    font-weight: 700;
    margin-top: 15px;
    color: #82799e;
`;

export const AddStepButton = styled.div`
    background-color: #c0bcce;
    color: white;
    width: fit-content;
    padding: 10px 14px;
    border-radius: 5px;
    margin-top: 16px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

export const SelectWrapper = styled.div`
    width: 100%;
    margin-right: 5px;
`;

export const AddNewWrapper = styled.div`
    display: flex;
    align-items: center;
`;