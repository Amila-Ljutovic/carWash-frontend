import React from "react";

//components
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

//styled components 
import { Wrapper } from "./styledLayout";
import { ContentWrapper } from './styledLayout'

function Layout({children}) {
    return ( 
        <Wrapper>
            <Sidebar />
            <ContentWrapper>
                <Navbar>
                    
                </Navbar>
                <div>
                    {children}
                </div>
            </ContentWrapper>
        </Wrapper>
    );
}

export default Layout;