import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

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
]

export const washingPrograms = [
    {
        "id": 1,
        "name": "Prvi",
        "price": 1,
        "washing_steps": [
            {"id":1,"name":"blacknor0","duration":42,"substance":"Maroon"},
            {"id":2,"name":"jbucktharp1","duration":36,"substance":"Red"},
            {"id":3,"name":"lbeckhurst2","duration":11,"substance":"Purple"}
        ]
    },
    {
        "id": 2,
        "name": "Drugi",
        "price": 2,
        "washing_steps": [
            {"id":1,"name":"blacknor0","duration":42,"substance":"Maroon"},
            {"id":2,"name":"jbucktharp1","duration":36,"substance":"Red"},
        ]
    },
    {
        "id": 3,
        "name": "Treci",
        "price": 3,
        "washing_steps": [
            {"id":1,"name":"gbroose3","duration":86,"substance":"Violet"},
            {"id":1,"name":"dsheriff4","duration":66,"substance":"Goldenrod"},
            {"id":2,"name":"dhargreaves5","duration":33,"substance":"Violet"},
            {"id":2,"name":"tphear6","duration":99,"substance":"Turquoise"}
        ]
    }
]