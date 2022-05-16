import { login, getUserInfo } from '@/api/auth/auth'
import { getToken, removeToken, setToken } from '@/utils/auth'


const state = {
  token: getToken(), // token
  user: '', // 用户对象
}

const mutations = {
  SET_TOKEN_STATE: (state, token) => {   //SETxxx(){} 形式是不是也一样
    state.token = token
  },
  SET_USER_STATE: (state, user) => {
    state.user = user
  }
}

const actions = {
  // 用户登录
  login({ commit }, userInfo) {   //此处login是定义的actions方法,需要同过dispatch来进行调用   { commit } 解构赋值，将context中的commit拿出
    console.log(userInfo)
    const { name, pass, rememberMe } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: name.trim(), password: pass, rememberMe: rememberMe }).then(response => {  //此处login接口方法
        const { data } = response
        commit('SET_TOKEN_STATE', data.token)
        setToken(data.token)
        resolve()     //Promise的参数....学习!
      }).catch(error => {
        reject(error)
      })
    })
  },
   // 获取用户信息
   getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        if (!data) {
          commit('SET_TOKEN_STATE', '')
          commit('SET_USER_STATE', '')
          removeToken()
          resolve()
          reject('Verification failed, please Login again.')
        }
        commit('SET_USER_STATE', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}