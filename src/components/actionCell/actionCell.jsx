import React, {useEffect, useState} from 'react'
import { IconCell, IconEdit, IconDelete, IconView } from './styledActionCell'
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function ActionCell({ path, value, isReadOnly }) {
    const navigate = useNavigate()

    const goToEdit = () => {
        console.log(path)
        navigate(`/${path}/${value.id}`)
    }

    return ( 
        <IconCell>
            {   !isReadOnly
                ? <>
                    <IconEdit>
                        <FiIcons.FiEdit3 onClick={() => goToEdit()} />
                    </IconEdit>
                    <IconDelete>
                        <RiIcons.RiDeleteBin5Line onClick={() => console.log('delete')} />
                    </IconDelete>
                </>
                : <IconView>
                    <BsIcons.BsEyeFill onClick={() => goToEdit()} />
                </IconView>
            }
        </IconCell> 
    );
}

export default ActionCell;