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
    const [mostUsedProgram,  setMostUsedProgram] = useState()
    useEffect(() => {
        axios.get('dashboard-data').then((res) => { 
            setDashboardData(res.data)
        })
    }, [])

    useEffect(() => {
        if(dashboardData) {
            let mostUsed = dashboardData.usage_of_washing_programs[`${Object.keys(dashboardData.usage_of_washing_programs)[0]}`]
         
            Object.keys(dashboardData.usage_of_washing_programs).forEach((key) => {
                if(dashboardData.usage_of_washing_programs[`${key}`].length > mostUsed.length ) mostUsed = dashboardData.usage_of_washing_programs[`${key}`]
            })
            setMostUsedProgram(mostUsed)
        }
    }, [dashboardData])

   return ( 
        <DashboardWrapper>
            {   dashboardData && mostUsedProgram &&
                <>
                    <DashboardCard title={'Most loyal customer'} value={dashboardData.most_loyal_customer.first_name + ' ' + dashboardData.most_loyal_customer.last_name} icon={<RiIcons.RiUserStarLine />} color={'#53bcdc'}></DashboardCard>
                    <DashboardCard title={'Total number of customers'} color={'#e83f32'} value={dashboardData.number_of_customers} icon={<FiIcons.FiUsers />}></DashboardCard>
                    <DashboardCard title={'The most frequently used program'} value={mostUsedProgram[0].washing_program.name} icon={<MdIcons.MdLocalCarWash />} color={'#5cb77c'}></DashboardCard>
                </>
            }
        </DashboardWrapper> 
    );
}

export default Dashboard;