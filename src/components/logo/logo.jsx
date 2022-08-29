import React from "react";
import * as TbIcons from 'react-icons/tb';

//styled
import { Wrapper } from "./styledLogo";
import { LogoTop } from "./styledLogo";
import { LogoBottom } from "./styledLogo";
import { Img } from "./styledLogo";
import { Text } from "./styledLogo";

function Logo() {
    return ( 
    <Wrapper>
        <LogoTop>
            <Img>
                <TbIcons.TbWiperWash />
            </Img>
            <Text 
                isTop={true}>
                CAR
            </Text>
        </LogoTop>
        <LogoBottom>
            <Text>
                WASH
            </Text>
        </LogoBottom>
    </Wrapper> 
    );
}

export default Logo;