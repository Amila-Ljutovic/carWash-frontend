
import styled from "styled-components";

export const Container = styled.div`
 
  width: 95%;
  margin: auto;
`;
export const TableWrapper = styled.div`
    margin-top: 1rem;
    background: white;
    overflow: auto;
    border-radius: 4px; 
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

`;
export const TableStyle = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const TableCell = styled.tr`
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    white-space: nowrap;
    font-weight: 500;
    color: #6d648e;
    border-top: 1px solid #f3f3f4;
    height: 40px;
    font-weight: 300;
`;

export const TableHeader = styled.th`
    width: 50px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    height: 40px;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;
    color: #2e205d;
    font-weight: 700;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #2e205d;
`;

export const TitleWrapper = styled.div`
    margin: 30px 0;
`;