import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const sidebarList = [
    {
        title: 'Dashboard',
        icon: <AiIcons.AiFillDashboard />,
        path: '/'
    },
    {
        title: 'Customers',
        icon: <FiIcons.FiUsers />,
        path: '/customers'
    },
    {
        title: 'Washing steps',
        icon: <AiIcons.AiOutlineOrderedList />,
        path: '/washing-steps'
    },
    {
        title: 'Washing programs',
        icon: <MdIcons.MdLocalCarWash />,
        path: '/washing-programs'
    },
]

export const washingSteps = [{"id":1,"name":"blacknor0","duration":42,"substance":"Maroon"},
{"id":2,"name":"jbucktharp1","duration":36,"substance":"Red"},
{"id":3,"name":"lbeckhurst2","duration":11,"substance":"Purple"},
{"id":4,"name":"gbroose3","duration":86,"substance":"Violet"},
{"id":5,"name":"dsheriff4","duration":66,"substance":"Goldenrod"},
{"id":6,"name":"dhargreaves5","duration":33,"substance":"Violet"},
{"id":7,"name":"tphear6","duration":99,"substance":"Turquoise"},
{"id":8,"name":"ezima7","duration":8,"substance":"Aquamarine"},
{"id":9,"name":"apepler8","duration":66,"substance":"Teal"},
{"id":10,"name":"mharbard9","duration":62,"substance":"Crimson"},
]