import styled from "styled-components"
import { device } from "../../utils/responsive"

export const Wrapper = styled.div`
    width: 210px;
    background-color: #2e205d;
    color: white;
    min-height: 100vh;
    padding: 30px 15px 30px 15px;

    @media ${device.mobileS} {
        display: none;
    }
    @media ${device.mobileM} {
        display: none;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

export const ListWrapper = styled.div`
    margin-top: 30px;
`;