import React, { useMemo } from "react";

//react table
import { useTable } from "react-table";

//styled
import { TableStyle, TableCell, TableHeader, TableWrapper, Container, Title, TitleWrapper } from './styledTable'

function Table({ data, columns, title }) {

    const dataArray = useMemo(() => data, [])
    const columnArray = useMemo(() => columns, [])

    const tableInstance = useTable({
        columns: columnArray,
        data: dataArray
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
       
    } = tableInstance

    return (
        <Container>
            <TitleWrapper>
                <Title>
                    {title}
                </Title>
            </TitleWrapper>
            <TableWrapper>
                <TableStyle {...getTableProps()}>
                    <thead>
                        {
                            headerGroups.map((headerGroup) => 
                            (<tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => (
                                        <TableHeader {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </TableHeader>
                                    ))
                                }
                                
                            </tr>)
                            )
                        }
                    
                    </thead>
                    <tbody {...getTableBodyProps}>
                        {
                            rows.map((row) => {
                                prepareRow(row)
                                return (
                                    <TableCell {...row.getRowProps()}>
                                        {
                                            row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            })
                                        }
                                        
                                    </TableCell>
                                )
                            })
                        }
                    
                    </tbody>
                </TableStyle>
            </TableWrapper>
        </Container>
     );
}

export default Table;