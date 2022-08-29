import React from "react";
import { useNavigate } from 'react-router-dom'

//styled
import { Item } from "./styledSidebarItem";
import { Icon } from "./styledSidebarItem";
import { Title } from "./styledSidebarItem";

function SidebarItem({data, isActive}) {
    let navigate = useNavigate()

    const goToPage = (path) => {
        navigate(`${path}`)
    }
    return ( 
        <Item onClick={() => goToPage(data.path)} isActive={isActive}>
            <Icon>
                {data.icon}
            </Icon>
            <Title>
                {data.title}
            </Title>
        </Item> 
    );
}

export default SidebarItem;