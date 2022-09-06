import axios from "axios"

export const getWashingSteps = () => axios.get('washing-steps/all')

export const updateWashingStep = (id, data) => axios.put(`washing-steps/${id}`, data)

export const createWashingStep = (data) => axios.post('washing-steps/create', data)

export const getWashingStepById = (id) => axios.get(`washing-steps/${id}`)