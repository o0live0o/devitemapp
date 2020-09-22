import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://118.25.102.202:8601'
});

export const login = ({
    userAccount,
    pwd
}) => {
    console.log(userAccount+pwd)
    instance.post('login?userAccount=Administrator&pwd=123456').then(function (response) {
        console.log('success')
        console.log(response)
    }).catch(function (error) {
        
        console.log('error')
        console.log(error)
    });
}