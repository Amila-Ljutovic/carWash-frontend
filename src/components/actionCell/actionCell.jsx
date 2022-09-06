import React, {useEffect, useState} from 'react'
import { IconCell, IconEdit, IconDelete, IconView } from './styledActionCell'
import * as RiIcons from 'react-icons/ri';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

function ActionCell({ path, value, isReadOnly }) {
    const navigate = useNavigate()

    const goToEdit = () => {
        navigate(`/${path}/${value.id}`)
    }

    const deleteRecord = () => {
        axios.delete(`${path}/${value.id}`).then((res) => {
            navigate(0)
        })
        .catch(err => console.log(err))
    }

    return ( 
        <IconCell>
            {   !isReadOnly
                ? <>
                    <IconEdit>
                        <FiIcons.FiEdit3 onClick={() => goToEdit()} />
                    </IconEdit>
                    <IconDelete>
                        <RiIcons.RiDeleteBin5Line onClick={() => deleteRecord('')} />
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