import styled from "styled-components";

export const Wrapper = styled.button`
    background-color: ${(props) => props.color ? `${props.color}` : '#43366d'};
    border-radius: 4px;
    color: white;
    border: none;
    display: flex;
    padding: 10px 15px;
    font-size: 17px;
    height: fit-content;
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;

export const Icon = styled.div`

`;

export const Label = styled.div`

`;