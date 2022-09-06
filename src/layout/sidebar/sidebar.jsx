import React from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as AiIcons from 'react-icons/ai' 
import axios from 'axios'
import { logout } from "../../api/auth";

//styled
import { Wrapper } from "./styledSidebar";
import { ListWrapper } from "./styledSidebar";
import { Logout } from "./styledSidebar";
import { LogoutText } from "./styledSidebar";

//components
import SidebarItem from "./sidebarItem/sidebarItem";
import Logo from "../../components/logo/logo";

function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const sidebarList = useSelector(state => state.sidebar.sidebarData)

    const submitLogout = () => {
        logout().then((res) => {
            localStorage.removeItem('token')
            navigate('/login')
        })
    }

    return ( 
        <Wrapper>
            <Logo />
            <ListWrapper>
                {
                    sidebarList.map((item, index) => {
                        return (
                            <SidebarItem 
                                data={item}
                                isActive={pathname.split('/')[1] === item.path}
                                key={index}
                            />
                        )
                    })
                }
            </ListWrapper>
            <Logout onClick={() => submitLogout()}>
                <AiIcons.AiOutlineLogout />
                <LogoutText>{'Logout'}</LogoutText>
            </Logout>
        </Wrapper>
     );
}

export default Sidebar;