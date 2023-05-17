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
    return response;
}, error => {
        return Promise.reject(error);
    }
)
export default httpRequest;