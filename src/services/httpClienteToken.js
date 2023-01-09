import axios from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_APP_URL_BASE });

const request = {
    get: (url, token) => instance.get(url, { headers: { 'Authorization': 'Bearer ' + token } } ),
    post: (url, body, token) => instance.post(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    put: (url, body, token) => instance.put(url, body, { headers: { 'Authorization': 'Bearer ' + token } } ),
    delete: (url, token) => instance.delete(url, { headers: { 'Authorization': 'Bearer ' + token } } )
}

export default request;