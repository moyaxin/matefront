import axios from "axios";
import {showFailToast} from "vant";
import router from "../router";

const request = axios.create({
    // @ts-ignore
    baseURL: process.env.NODE_ENV === "development" ? 'http://localhost:8081/api' : 'http://101.34.244.76:9099/api',
    // baseURL: 'http://localhost:8082/api/',
});
request.defaults.withCredentials = true

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    console.log('请求URL和请求体: ',config.url,config.data);
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response.data)
    const data = response.data;
    if (data.code === 0) {
        return data?.data
    } else if (data.code === 40100) {
        showFailToast("请先登录")
        toLogin()
    } else if (data.code === 40101) {
        showFailToast(data.description)
        router.back()
    } else {
        showFailToast(data.description)
    }

}, function (error) {
    showFailToast("服务器超时  请重试")
    // toLogin()
    return Promise.reject(error);
});
const toLogin = () => {
    router.push("/user/login").catch(e => console.log(e))
}
export default request
