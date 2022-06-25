import axios from "axios";
import router from "../router/index"

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

request.interceptors.request.use(
  (config)=>{
    const token = localStorage.getItem('token')
    if(token) config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  (error)=> Promise.reject(error)
)

request.interceptors.response.use(
  (response)=>response,
  (error)=> {
    const {status} = error.response
    // const {message} = error.data
    // Message.error(message)
    if(status === 401) router.push({name: 'Login'})

    return Promise.reject(error)
  }
)
export default request
