import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.113:8080/api/v1'
})

export default api;

