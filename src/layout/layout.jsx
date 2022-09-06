import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

//components
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

//styled components 
import { Wrapper } from "./styledLayout";
import { ContentWrapper } from './styledLayout'

import { sidebarList } from "../data";
import { setSidebarData } from "../redux/sidebar/sidebarActions";

function Layout({children}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSidebarData(sidebarList))
    }, [])

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