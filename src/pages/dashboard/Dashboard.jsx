import { useState } from "react";
import { useEffect } from "react";
import * as RiIcons from "react-icons/ri"
import * as FiIcons from "react-icons/fi"
import * as MdIcons from "react-icons/md"

//components
import DashboardCard from "../../components/dashboardCard/dashboardCard";

//styled
import { DashboardWrapper } from "./styledDashboard"

import axios from 'axios'

function Dashboard() {
    const [dashboardData, setDashboardData] = useState()

    useEffect(() => {
        axios.get('dashboard-data').then((res) => {
            console.log(res.data, 'dashboarddd')
            setDashboardData(res.data)
        })
    }, [])

   return ( 
        <DashboardWrapper>
            <DashboardCard title={'Most loyal customer'} value={'Amila Ljutovic'} icon={<RiIcons.RiUserStarLine />} color={'#53bcdc'}></DashboardCard>
            <DashboardCard title={'Total number of customers'} color={'#e83f32'} value={2} icon={<FiIcons.FiUsers />}></DashboardCard>
            <DashboardCard title={'The most frequently used program'} value={2} icon={<MdIcons.MdLocalCarWash />} color={'#5cb77c'}></DashboardCard>
        </DashboardWrapper> 
    );
}

export default Dashboard;