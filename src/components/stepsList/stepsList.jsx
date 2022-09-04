
//styled
import { Wrapper, Step } from "./styledStepsList";

function StepsList({list}) {
    return ( 
        <Wrapper>
            {
                list.map(element => {
                    return <Step>{element.name}</Step>
                })
            }
        </Wrapper> 
    );
}

export default StepsList;