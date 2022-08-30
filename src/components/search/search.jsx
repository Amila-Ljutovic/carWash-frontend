import React, { useState } from "react";

//styled
import { Wrapper } from "./styledSearch";
import { Icon } from "./styledSearch";
import { Input } from "./styledSearch";

//icons
import * as HiIcons from 'react-icons/hi';

function Search({ filter, setFilter }) {
    const [isInputVisible, setIsInputVisible] = useState(false)

    return (
        <Wrapper>
            <Icon onClick={() => setIsInputVisible(!isInputVisible)}><HiIcons.HiOutlineSearch /></Icon>
            <Input 
                placeholder="Search ..." 
                value={filter || ''} 
                visible={isInputVisible}
                onChange={ e => setFilter(e.target.value)}
            />
            
        </Wrapper>
    );
}

export default Search;