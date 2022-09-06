import styled from "styled-components";
import { device } from "../../../../utils/responsive";

export const FormWrapper = styled.div`
    width: 95%;
    margin: auto;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #2e205d;
    margin: 30px 0;

    @media ${device.tablet} {
        margin-top: 55px;
    }
`;