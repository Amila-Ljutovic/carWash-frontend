import React, {useEffect, useState} from 'react'
import {IconCell, IconEdit, IconDelete} from './styledActionCell'
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function ActionCell({ path, value }) {
    const navigate = useNavigate()

    const goToEdit = () => {
        console.log(path)
        navigate(`/${path}/${value.id}`)
    }

    return ( 
        <IconCell>
            <IconEdit>
                <FiIcons.FiEdit3 onClick={() => goToEdit()} />
            </IconEdit>
            <IconDelete>
                <RiIcons.RiDeleteBin5Line onClick={() => console.log('delete')} />
            </IconDelete>
        </IconCell> 
    );
}

export default ActionCell;