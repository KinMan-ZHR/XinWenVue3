import request from '@/pages/shopping/apis/utils/http'

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}