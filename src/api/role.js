import request from '../utils/request.js'

export const getRoles = (pageSize, pageIndex)=>{
    let url = 'role'
    return request({
        method: 'GET',
        url: url,
        params: {
            pageSize,
            pageIndex
        }
    })
}