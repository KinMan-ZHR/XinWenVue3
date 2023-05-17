import request from  './httpRequest.js'
export const getNewsListAPI= () => {
    return request({
        url: '/adNews',
        method: 'GET'
    })
}