import axios from "../utils/axios.customize";


export const registerAPI = (username: string,
    email: string,
    citizen_id: string,
    commonName: string,
    organization: string,
    organizationalUnit: string,
    country: string,
    state: string,
    locality: string
) => {
    const url = `/api/v1/auth/register`
    return axios.post(url, { username, email, citizen_id, commonName, organization, organizationalUnit, country, state, locality })
}

export const loginAPI = (username: string, password: string) => {

    const url = `/api/v1/auth/login`
    return axios.post(url, { username: username, password })
}

export const getAllUsers = () => {

    const url = `/api/v1/users`
    return axios.get(url)
}

export const getUserById = (id: string) => {

    const url = `/api/v1/users/${id}`
    return axios.get(url)
}


