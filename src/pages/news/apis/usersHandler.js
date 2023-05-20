import request from "./httpRequest.js";
export const loginAPI = ({username,password}) => {
  return request({
    url: "/login",
    method: "post",
    data:{
        username,
        password
    }
  });
};