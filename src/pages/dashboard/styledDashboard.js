import styled from "styled-components";
import { device } from "../../utils/responsive";

export const DashboardWrapper = styled.div`
    display: grid;
    grid-auto-columns: 3fr;
    grid-auto-flow: column;
    gap: 3rem;
    width: 95%; 
    margin: auto;
    margin-top: 3rem;


    @media ${device.laptop} {
        display: flex;  
        gap: 1rem;
        flex-direction: column;
    }
`;