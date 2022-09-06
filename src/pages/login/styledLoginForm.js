import styled from "styled-components";
import {device} from "../../utils/responsive"
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 500px;
    background-color: white;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 15px 60px;

    @media ${device.mobileL} {
        width: 100%;
        height: 100%;
        padding: 50px 25px;
    }

`;

export const Title = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: #2e205d;
    @media ${device.mobileL} {
        font-size: 25px;
    }
`;
export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f2f4f5;
`;

export const Button = styled.button`
    background-color: #2e205d;
    color: white;
    width: 100px;
    height: 40px;
    margin-top: auto;
    margin-bottom: auto;
    align-self: center;
    border-radius: 5px;
    border: none;
    &:hover{
        opacity: 0.9;
        cursor: pointer;
    }
    &:focus{
        outline: none;
        border: none;
    }
    @media ${device.mobileL} {
        margin-top: 50px;
    }

`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`;