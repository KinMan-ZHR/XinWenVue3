import request from '@/pages/shopping/apis/utils/http'


export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}