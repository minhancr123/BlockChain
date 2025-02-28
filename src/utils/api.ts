import axios from "../utils/axios.customize";


export const registerAPI = (username: string,
    commonName: string,
    organization: string,
    organizationalUnit: string,
    country: string,
    state: string,
    locality: string
) => {
    const url = `/register`
    return axios.post(url, { username, commonName, organization, organizationalUnit, country, state, locality })
}