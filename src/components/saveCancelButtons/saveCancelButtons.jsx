import React from "react";
import { useNavigate } from "react-router-dom";

//styled
import { Wrapper, Button } from "./styledSaveCancelButtons"

function SaveCancelButtons({path, onSubmit, isReadOnly}) {
    const navigate = useNavigate()

    return ( 
        <Wrapper>
            {   !isReadOnly &&
                <Button onClick={() => onSubmit()}>{'Save'}</Button>
            }
            <Button isCancel onClick={() => navigate(`/${path}`)}>{'Cancel'}</Button>
        </Wrapper>
     );
}

export default SaveCancelButtons;