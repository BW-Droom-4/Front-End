import axios from 'axios';

export const apiUrl = 'https://droom-4.herokuapp.com/api';

 const authios = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: { 
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token")
        }
    });
};

export default authios
