import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import getters from '@/store/getter'
Vue.use(Vuex)


export default new Vuex.Store({
    modules:{
        user
    },
    getters
})
