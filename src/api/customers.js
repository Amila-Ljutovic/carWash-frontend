import axios from "axios"

export const getCustomers = () => axios.get('customers/all')

export const updateCustomer = (id, data) => axios.put(`customers/${id}`, data)

export const createCustomer = (data) => axios.post('customers/create', data)

export const getCustomerById = (id) => axios.get(`customers/${id}`)