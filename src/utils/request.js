import axios from 'axios'
import router from "../router";
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://81.68.122.9:8601';

const service = axios.create({
    baseURL: 'http://81.68.122.9:8601'
})

//请求拦截器
service.interceptors.request.use(
    config => {
        config.headers.Authorization = 'Bearer ' + window.sessionStorage.getItem('token')
        // console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

//响应拦截器
service.interceptors.response.use(
    response=>{
        return {
            code: 200,
            data: response.data 
        }
        // return response.data;
    },
    error => {
        let message = ''
        if(error && error.response && error.response.status){
            message = error.response.statusText
            if(error.response.status === 401){
                return router.push('/login')
            }
            message += '-' + error.response.data.message

        }

        Message.error({ message: error.response.status + ":" + message, offset: 300 })

        return {
            code: error.response.status,
            message:message
        }
        // return Promise.reject(error);
    }
)

export default service