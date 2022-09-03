import React from "react";
import { useNavigate }  from "react-router-dom"

//styled
import { Wrapper, Label, Icon } from "./styledAddNewButton";

function AddNewButton({label, icon, color, pathname}) {
    const navigate = useNavigate()

    const goToCreatePage = (pathname) => {
        navigate({
            pathname: `/${pathname}/create`
        })
    }
    

    return ( 
        <Wrapper color={color} onClick={() => goToCreatePage(pathname)}>
            <Icon>{icon}</Icon>
            <Label>{label}</Label>
        </Wrapper> 
    );
}

export default AddNewButton;