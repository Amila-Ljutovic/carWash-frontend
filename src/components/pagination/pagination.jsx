import React, { useEffect } from "react";

//hooks
import useQuery from "../../hooks/useQuery";

//styled
import { Wrapper, Button, PageIndex, NumberOfPages } from "./styledPagination";

function Pagination({ nextPage, previousPage, canNextPage, canPreviousPage, pageIndex, numberOfPages, gotoPage }) {

    const [addQuery, removeQuery, getQuery] = useQuery()

    const goToPage = (pageNumber) => {
       gotoPage(pageNumber - 1)
    }

    const goToNextPage = () => {
        nextPage()
        removeQuery('page')
        addQuery('page', pageIndex + 2)
    }

    const goToPreviousPage = () => {
        previousPage()
        removeQuery('page')
        addQuery('page', pageIndex)
    }

    useEffect(() => {
        let q = getQuery('page');
        (q) ? goToPage(Number(q)) : goToPage(1)
    }, [])

    return ( 
            <Wrapper>
                <Button 
                    disabled={!canPreviousPage}
                    onClick={() => goToPreviousPage()}>
                    Previous
                </Button>
                <PageIndex>
                    {pageIndex + 1}
                </PageIndex>
                of
                <NumberOfPages>
                    {numberOfPages}
                </NumberOfPages>
                <Button 
                    disabled={!canNextPage}
                    onClick={() => goToNextPage()}>
                    Next
                </Button>
            </Wrapper> 
        );
}

export default Pagination;