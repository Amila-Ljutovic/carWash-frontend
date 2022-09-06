import axios from 'axios'

export const getTransactions = () => axios.get('transactions/all')

export const createTransaction = (data) => axios.post('transactions/create', data)

export const getTransactionById = (id) => axios.get(`transactions/${id}`)