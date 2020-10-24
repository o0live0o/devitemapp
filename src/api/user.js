import request from '../utils/request'

export const getUsers = (pageSize,pageIndex) => {
    let url = 'users'
    return request({
        method: 'GET',
        url: url,
        params: {
            pageSize,
            pageIndex
        }
    })
}

export const getUser = (userId) => {
    let url = 'users'
    return request({
        method: 'GET',
        url,
        params: {
            userId
        }
    })
}

