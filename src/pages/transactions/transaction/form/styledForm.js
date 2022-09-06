import styled from "styled-components";
import { device } from "../../../../utils/responsive";

export const SelectWrapper = styled.div`
    margin-bottom: 10px;
    width: 30%;

    @media ${device.tablet} {
        width: 100%;
    }
`;