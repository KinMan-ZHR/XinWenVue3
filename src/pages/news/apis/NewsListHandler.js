import request from  './httpRequest.js'

export const addNewsAPI= (data) => {
    return request({
        url: '/adNews',
        method: 'POST',
        data
    })
}
//路径参数传递id
export const deleteNewsAPI= (id) => {
    return request({
        url: '/adNews/'+id,
        method: 'DELETE'
    })
}
export const updateNewsAPI= (data) => {
    return request({
        url: '/adNews',
        method: 'PUT',
        data
    })
}
//条件查询新闻,且分页
export const getNewsByConditionAPI= (data) => {
    return request({
        url: '/adNews',
        method: 'GET',
        params:data
    })
}