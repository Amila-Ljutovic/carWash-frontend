import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const sidebarList = [
    {
        title: 'Dashboard',
        icon: <AiIcons.AiFillDashboard />,
        path: ''
    },
    {
        title: 'Customers',
        icon: <FiIcons.FiUsers />,
        path: 'customers'
    },
    {
        title: 'Washing steps',
        icon: <AiIcons.AiOutlineOrderedList />,
        path: 'washing-steps'
    },
    {
        title: 'Washing programs',
        icon: <MdIcons.MdLocalCarWash />,
        path: 'washing-programs'
    },
    {
        title: 'Transactions',
        icon: <RiIcons.RiMoneyEuroCircleLine />,
        path: 'transactions'
    },
]

export const washingPrograms = [
]