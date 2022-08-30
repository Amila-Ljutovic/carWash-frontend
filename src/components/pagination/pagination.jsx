import React from "react";

//styled
import { Wrapper, Button, PageIndex, NumberOfPages } from "./styledPagination";

function Pagination({ nextPage, previousPage, canNextPage, canPreviousPage, pageIndex, numberOfPages }) {

    return ( 
            <Wrapper>
                <Button 
                    disabled={!canPreviousPage}
                    onClick={() => previousPage()}>
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
                    onClick={() => nextPage()}>
                    Next
                </Button>
            </Wrapper> 
        );
}

export default Pagination;