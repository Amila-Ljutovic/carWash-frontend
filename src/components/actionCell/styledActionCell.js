import styled from "styled-components";

export const IconCell = styled.div`
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    

`;

export const IconEdit = styled.div`
    cursor: pointer;
    margin-right: 5px;
    color: #2e205d; 
    &:hover{
        opacity: 0.8;
    }
`;

export const IconDelete = styled.div`
    cursor: pointer;
    color: rgba(239, 68, 68, 1);
    &:hover {
        opacity: 0.8;
    }
`;