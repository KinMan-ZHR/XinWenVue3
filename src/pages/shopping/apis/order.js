import request from '@/pages/shopping/apis/utils/http'

/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/


export const getUserOrder = (params) => {
  return request({
    url: '/member/order',
    method: 'GET',
    params
  })
}