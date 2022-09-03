import React from "react";

//styled

//components
import Input from "../../../../components/input/input";
import SaveCancelButtons from "../../../../components/saveCancelButtons/saveCancelButtons";

function WashingStepForm({isEdit}) {
    return ( 
        <>
            <Input required={true} disabled={false} label={'Name'} value={''} placeholder={''} />
            <Input required={true} disabled={false} label={'Duration'} value={''} placeholder={''} />
            <Input required={true} disabled={false} label={'Substance'} value={''} placeholder={''} />
            <SaveCancelButtons path={'washing-steps'}/>
        </> 
    );
}

export default WashingStepForm;