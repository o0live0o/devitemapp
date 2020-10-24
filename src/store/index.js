/*
 * @Author: live0x 
 * @Date: 2020-10-24 11:05:35 
 * @Last Modified by: live0x
 * @Last Modified time: 2020-10-24 11:27:25
 */
import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        message: 'Hello'
    }
})

export default store;