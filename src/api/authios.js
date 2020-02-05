import axios from 'axios';

export const apiUrl = 'https://droom-4.herokuapp.com/api';

 const authios = () => {
    return axios.create({
        baseURL: apiUrl,
        headers: { 
            "Content-Type": "application/json",
            "authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsImVtYWlsIjoibm9sYW5waWNAZ21haWwuY29tIiwiaWF0IjoxNTgwODUwOTg5LCJleHAiOjE1ODA5MzczODl9.6IxmnaLwJIxamvwl2VrMt0zD3aJrg8G5xTS9dxA5_5g" /*localStorage.getItem("token")*/ 
        }
    });
};

export default authios
