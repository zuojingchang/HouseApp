import axios from 'axios'
import qs from 'qs'

const IP = 'http://172.16.12.177:80/'

//登录页面请求
export function login (acc,pwd){
    return axios.post(IP + 'login.php',qs.stringify({acc,pwd}))
}
//注册页面其请求
export function register(acc,pwd){
    return axios.post(IP + 'reg.php',qs.stringify({acc,pwd}))
}
// 主页请求
export function reqMain (){
    return axios.get(IP + 'gethouselist.php')
}

export function selectCity(){
    return axios.get('./JSON.json')
}