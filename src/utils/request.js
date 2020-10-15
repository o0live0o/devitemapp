import axios from 'axios'

const service = axios.create({
    baseURL: 'http://118.25.102.202:8601'
})

service.interceptors.response.use(
    response=>{
        return response.data
    }
)

export default service