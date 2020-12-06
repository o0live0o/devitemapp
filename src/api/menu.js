/*
 * @Author: live0x 
 * @Date: 2020-10-13 09:58:40 
 * @Last Modified by: live0x
 * @Last Modified time: 2020-12-06 22:55:15
 */
import request from '../utils/request'

const url = 'menu'

export function getMenus(){
    return request({
        url,
        method: 'GET'
    })
}

