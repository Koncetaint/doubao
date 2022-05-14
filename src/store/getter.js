//获取token，user简化代码
const getters = {
    token: state => state.user.token,   //使用了modules，。user是区分文件的。
    user: state => state.user.user,
}

export default getters