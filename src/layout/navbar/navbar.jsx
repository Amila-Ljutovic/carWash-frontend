import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"

//styled
import { Wrapper, Message, Information, UserImage, UserFullName, TechnicalInformation, Icon, UserInformation } from "./styledNavbar";

function Navbar() {
    return ( 
        <Wrapper>
            <Message>
                {'Greetings Amila!'}
            </Message>
            <Information>
                <UserInformation>
                    <UserImage>
                        <FaIcons.FaUserAlt />
                    </UserImage>
                    <UserFullName>
                        {'Amila Ljutovic'}
                    </UserFullName>
                </UserInformation>
                <TechnicalInformation>
                    <Icon>
                        <AiIcons.AiFillSetting />
                    </Icon>
                    <Icon>
                        <IoIcons.IoIosNotifications />
                    </Icon>
                    <Icon>
                        <BsIcons.BsEnvelopeFill />
                    </Icon>
                </TechnicalInformation>
            </Information>
        </Wrapper> 
    );
}

export default Navbar;