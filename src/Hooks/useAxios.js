import axios from "axios";

var data = JSON.parse(window.localStorage.getItem('jobTrackaUser')) || '';
const authorization = `Bearer ${data.token}`
console.log(authorization)

const useAxios =  axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers:{
        "content-type": "application/json"
    }
})

useAxios.interceptors.request.use((config) => {
    if (authorization) {
      config.headers.common['Authorization'] = authorization;
    }
    return config;
  });

export default useAxios;