import styled from "styled-components";

export const Item = styled.div`
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 10px;
    border-radius: 3px;
    color: ${(props) =>
        props.isActive ? '#2e205d' : '#c0bcce'} ;;
    background-color: ${(props) =>
        props.isActive ? '#c0bcce' : ''} ;
    &:hover {
        background-color: ${(props) =>
        props.isActive ? '#c0bcce' : '#43366d'};
        cursor: pointer;
    }

`;

export const Icon = styled.div`
    margin-top: 4px;
`;

export const Title = styled.label`
    margin-left: 10px;
    &:hover {
        cursor: pointer;
    }
`;