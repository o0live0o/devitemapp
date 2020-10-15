/*
 * @Author: live0x 
 * @Date: 2020-10-13 09:58:40 
 * @Last Modified by:   live0x 
 * @Last Modified time: 2020-10-13 09:58:40 
 */
import request from '../utils/request'

export function getMenus(){
    return request({
        url: 'rbac/menu-trees',
        method: 'GET'
    })
}