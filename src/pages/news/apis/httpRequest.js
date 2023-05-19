import axios from "axios";

const httpRequest = axios.create({
    baseURL: "/local",
    timeout: 10000,
})

// 请求拦截器
httpRequest.interceptors.request.use(config => {
    return config;
}, error => {
        return Promise.reject(error);
    }
)
// 响应拦截器
httpRequest.interceptors.response.use(response => {
     //   console.log(response)
    //一般而言，只需要返回data即可
        return response.data;
}, error => {
        return Promise.reject(error);
    }
)
export default httpRequest;