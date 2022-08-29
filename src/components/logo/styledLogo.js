import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const LogoTop = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoBottom = styled.div`

`;

export const Img = styled.div`
    font-size: 37px;
    margin-right: 5px;
    color: #c0bcce;
`;

export const Icon = styled.div`

`;

export const Text = styled.div`
    font-weight: 900;
    font-size: 29px;
    letter-spacing: 4px;
    color: ${(props) =>
        props.isTop ? "#82799e" : "#c0bcce"};
    margin-top: ${(props) =>
        props.isTop ? '0' : '-15px'}
`; 