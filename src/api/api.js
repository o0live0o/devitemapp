import request from '../utils/request' 

export const login = ({
    userAccount,
    pwd
}) => {
    request.post('login',null, {
        params: {
            userAccount: userAccount,
            pwd: pwd
        }
    }).then(response => {
        console.log(response)
    }).catch( error => {
        console.log(error.response)
    });
}