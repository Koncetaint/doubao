import request from '@/utils/request'

export function getList(pageNo, size, tab){
    return request({
       url:'/post/list',
       method:'get',
       params:{ pageNo, size, tab }
    })
}