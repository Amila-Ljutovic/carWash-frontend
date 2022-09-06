import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import {useSelector} from 'react-redux'

//styled
import { Wrapper, Message, Information, UserImage, UserFullName, TechnicalInformation, Icon, UserInformation } from "./styledNavbar";
import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser);
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(currentUser)
    }, [currentUser])
    return ( 
        <Wrapper>
            {user && <Message>
                {`Hello, ${user.name}!`}
            </Message>}
            <Information>
                <UserInformation>
                    <UserImage>
                        <FaIcons.FaUserAlt />
                    </UserImage>
                    {user && <UserFullName>
                    {`${user.name}`}
                    </UserFullName>}
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