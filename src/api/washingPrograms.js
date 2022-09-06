import axios from "axios"

export const getWashingPrograms = () => axios.get('washing-programs/all')

export const updateWashingProgram = (id, data) => axios.put(`washing-programs/${id}`, data)

export const createWashingProgram = (data) => axios.post('washing-programs/create', data)

export const getWashingProgramById = (id) => axios.get(`washing-programs/${id}`)