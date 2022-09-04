import styled from "styled-components";

export const GenderGroup = styled.div`
    margin-bottom: 10px;
`;

export const Label = styled.div`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #82799e;
`;

export const Radio = styled.input`
    &:hover {
        cursor: pointer;
    }
    &:nth-child(2) {
        margin-left: 30px;
    }
`;