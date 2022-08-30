import React, { useMemo } from "react";

//react table
import { useTable, useGlobalFilter, usePagination } from "react-table";

//styled
import { TableStyle, TableCell, TableHeader, TableWrapper, Container, Title, TitleWrapper } from './styledTable'

//components
import Search from "../search/search";
import Pagination from "../pagination/pagination";

function Table({ data, columns, title }) {

    const dataArray = useMemo(() => data, [])
    const columnArray = useMemo(() => columns, [])

    const tableInstance = useTable({
        columns: columnArray,
        data: dataArray
    }, useGlobalFilter, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        state,
        setGlobalFilter
    } = tableInstance
    
    const { globalFilter, pageIndex } = state

    return (
        <Container>
            <TitleWrapper>
                <Title>
                    {title}
                </Title>
                <Search filter={globalFilter} setFilter={setGlobalFilter}></Search>
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
                            page.map((row) => {
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
            <Pagination nextPage={nextPage} previousPage={previousPage} canNextPage={canNextPage} canPreviousPage={canPreviousPage} 
            pageIndex={pageIndex} numberOfPages={pageOptions.length} gotoPage={gotoPage}></Pagination>
        </Container>
     );
}

export default Table;