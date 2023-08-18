import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const actions = {
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value){
        setTimeout( () =>{
            context.commit('JIA',value)
        },500)
    }
}

const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}

const state ={
    personList:[
        {id:'001',name:'浦京'}
    ],
    sum:0,
    school:'尚硅谷',
    subject:'前端',
}

const getters ={
    bigSum(state){
        return state.sum * 10
    }
}


export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})