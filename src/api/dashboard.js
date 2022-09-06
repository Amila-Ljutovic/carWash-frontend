import axios from 'axios'

//delete record from db
export const deleteRecordFromDb = (path, id) => axios.delete(`${path}/${id}`)

export const getDashboardData = () => axios.get('dashboard-data')