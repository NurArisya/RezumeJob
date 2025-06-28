// api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8081',
    withCredentials: true // always send cookies with every request
});

export default API;
