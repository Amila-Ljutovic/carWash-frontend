import axios from "axios"

export const login = (data) => axios.post('login', data);

export const logout = () => axios.post('logout')

export const me = () => axios.get('me')