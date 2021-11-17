/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 15:20:11
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    jumpTo(context,value){
        context.commit("_setJumpUrl",value)
    }
}
const mutations = {
    _setJumpUrl(state,value){
        state.jumpUrl = value
    }
}
const state = {
    jumpUrl:""
}
const getters = {

}

export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters
})