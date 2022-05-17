import request from '@/utils/request'

export function getList(pageNo, size, tab){
    return request({
       url:'/post/list',
       method:'get',
       params:{ pageNo, size, tab }
    })
}

 export function post(topic){
     return request({
         url:'/post/create',
         method:'post',
         data: topic
     })
 }

// 浏览
export function getTopic(id) {
    return request({
      url: `/post`,
      method: 'get',
      params: {
        id: id
      }
    })
  }
  