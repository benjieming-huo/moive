// 这个js文件是用来封装请求文件
import axios from "axios";
// 拦截器，此处是对返回结果的的响应处理，所以得使用响应拦截器
axios.interceptors.response.use(ret=>{
    //  将ret.data换成ret
    return ret.data || ret;
})
// 导出axios请求
export default axios;