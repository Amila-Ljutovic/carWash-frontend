import styled from "styled-components";
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
   
    height: 50px;
    width: 95%;
    margin: auto;
    margin-top: 1rem;
    display: flex;  
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Information = styled.div`
    display: flex;
    align-items: center;
     
    @media ${device.tablet} {
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

export const Message = styled.div`
    font-size: 23px;
    color: #726e6e;
`;

export const UserImage = styled.div`
    background-color: white;    
    height: 40px;
    width: 40px;    
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 10px;
    color: #726e6e;
`;

export const UserInformation = styled.div`
    display: flex;
    align-items: center;
    margin-right: 25px;
    padding-right: 25px;
    border-right: 1px solid #726e6e;

`;

export const UserFullName = styled.div`
    color: #726e6e;
`;

export const TechnicalInformation = styled.div`
    display: flex;
    align-items: center;
   
`;

export const Icon = styled.div`
    font-size: 25px;
    padding: 2px;
    color: #726e6e;
`;