import axios from "axios";

const BASE_URL = "http://greengo.apteki.uz/api"

const token = localStorage.getItem('token')

export default axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization': `Token ${token}` 
    }
});
