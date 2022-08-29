import React from "react";
import { useLocation } from 'react-router-dom'

//styled
import { Wrapper } from "./styledSidebar";
import { ListWrapper } from "./styledSidebar";

//data
import { sidebarList } from "../../data";

//components
import SidebarItem from "./sidebarItem/sidebarItem";
import Logo from "../../components/logo/logo";

function Sidebar() {
    const { pathname } = useLocation()
    
    return ( 
        <Wrapper>
            <Logo />
            <ListWrapper>
                {
                    sidebarList.map((item, index) => {
                        return (
                            <SidebarItem 
                                data={item}
                                isActive={pathname === item.path}
                                key={index}
                            />
                        )
                    })
                }
            </ListWrapper>
        </Wrapper>
     );
}

export default Sidebar;