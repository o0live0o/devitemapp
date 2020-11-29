import request from '../utils/request' 

export const login = ({
    userAccount,
    pwd
}) => {
    return request.post('login',null, {
        params: {
            userAccount: userAccount,
            pwd: pwd
        }
    }).then(response => {
        return response
    }).catch( error => {
        return error.response.data
    });
}