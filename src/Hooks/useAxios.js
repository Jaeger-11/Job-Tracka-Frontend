import axios from "axios";

const useAxios =  axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers:{
        "content-type": "application/json"
    }
})

useAxios.interceptors.request.use((config) => {
  const data = JSON.parse(window.localStorage.getItem('jobTrackaUser')) || '';
  const authorization = `Bearer ${data.token}`
    if (data) {
      config.headers.common['Authorization'] = authorization;
    }
    return config;
});

export default useAxios;