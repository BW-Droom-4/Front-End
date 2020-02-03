import axios from 'axios';

export const apiUrl = 'http://url-to-api.me';

export const authios = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: { authorization: localStorage.getItem("token") }
    });
};
