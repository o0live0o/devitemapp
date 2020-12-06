/*
 * @Author: live0x 
 * @Date: 2020-12-06 22:54:35 
 * @Last Modified by:   live0x 
 * @Last Modified time: 2020-12-06 22:54:35 
 */
import request from '../utils/request'

export function getMenus() {
    return request({
        url: 'rbac/menu-trees',
        method: 'GET'
    })
}
