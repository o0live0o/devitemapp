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
    let url = 'users/'+userId
    return request({
        method: 'GET',
        url
    })
}

export const deleteUser = (userId) => {
    let url = 'users/' + userId
    return request({
        method: 'DELETE',
        url
    })
}

export const addUser = (user) => {
    let url = 'users'
    return request({
        method: 'POST',
        data:user,
        url
    })
}

export const editUser = (id,user) => {
    let url = 'users/'+id
    return request({
        method: 'PUT',
        data: user,
        url
    })
}

