import React from "react";
import { useNavigate } from "react-router-dom";

//styled
import { Wrapper, Button } from "./styledSaveCancelButtons"

function SaveCancelButtons({path, onSubmit}) {
    const navigate = useNavigate()

    return ( 
        <Wrapper>
            <Button onClick={() => onSubmit()}>{'Save'}</Button>
            <Button isCancel={true} onClick={() => navigate(`/${path}`)}>{'Cancel'}</Button>
        </Wrapper>
     );
}

export default SaveCancelButtons;