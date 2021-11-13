import axios from "axios";

const BASE_URL = "http://greengo.apteki.uz/api"


export default axios.create({
    baseURL:BASE_URL
});
