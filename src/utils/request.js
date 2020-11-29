import axios from 'axios'

axios.defaults.baseURL = 'http://81.68.122.9:8601';

const service = axios.create({
    baseURL: 'http://81.68.122.9:8601'
})

//请求拦截器
service.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
        console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截器
service.interceptors.response.use(
    response=>{
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
)

export default service