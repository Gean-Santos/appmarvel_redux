import axios from 'axios';

const urlMarvel = 'https://gateway.marvel.com/v1/public/';
    
const api = axios.create({
    baseURL: urlMarvel,
        headers:{
            Accept: "application/json",
            'Content-Type':'application/json'
        }
});

export default api; 
          