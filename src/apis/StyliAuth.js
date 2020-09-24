import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

export const StyliAuth = axios.create({
    baseURL: 'https://styli-api.herokuapp.com/api',
    headers
});