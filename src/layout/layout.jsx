import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux"

//components
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import axios from "axios"

//styled components 
import { Wrapper } from "./styledLayout";
import { ContentWrapper } from './styledLayout'

import { sidebarList } from "../data";
import { setSidebarData } from "../redux/sidebar/sidebarActions";
import { setCurrentUser } from "../redux/user/userActions";

//api
import { me } from "../api/auth";

function Layout({children}) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSidebarData(sidebarList))
        me().then((res) => {
            dispatch(setCurrentUser(res.data))
        })
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