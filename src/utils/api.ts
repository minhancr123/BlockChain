import axios from "../utils/axios.customize";


export const registerAPI = (username: string,
    commonName: string,
    organization: string,
    organizationalUnit: string,
    country: string,
    state: string,
    locality: string
) => {
    const url = `/ap1/v1/auth/register`
    return axios.post(url, { username, commonName, organization, organizationalUnit, country, state, locality })
}

export const loginAPI = (username: string, password: string) => {

    const url = `/api/v1/auth/login`
    return axios.post(url, { username: username, password })
}