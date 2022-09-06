import styled from "styled-components";
import { device } from "../../utils/responsive";

export const CardWrapper = styled.div`
    background-color: white;
    height: 110px;
    position: relative;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    padding: 20px;

    @media ${device.tablet} {
        width: 80%;
    }    
`;

export const Title = styled.div`
    font-weight: 700;
    color: #2e205d;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f4;
    width: fit-content;
    
`;

export const Value = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #726e6e;
`;

export const HighlightBox = styled.div`
    background-color: ${(props) => props.color ? props.color : "#2e205d"};
    width: 30px;   
    height: 30px;   
    color: white;
    text-align: center;
    padding: 10px;
    position: absolute;
    right: -25px;
    top: 50px;
    padding-top: 13px;
    padding-bottom: 5px;
    font-size: 23px;
    box-shadow:${(props) => props.color ? `0px 0px 14px -2px ${props.color}` : `0px 0px 14px -2px #2e205d`} ;
`;