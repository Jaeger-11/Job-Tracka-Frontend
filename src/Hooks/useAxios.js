import axios from "axios";
// https://job-tracka.herokuapp.com/api/v1   heroku
// https://lively-crab-shorts.cyclic.app/    cyclic
// https://job-tracka-backend.vercel.app/ vercel

const useAxios =  axios.create({
    baseURL: "https://job-tracka-backend.vercel.app/api/v1",
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
