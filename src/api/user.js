import api from './index'
// axios
import request from '@/utils/request'
import { http } from './home'

// 登录
export function logins (data) {
  return http('opt/findById', data ,'GET', true)
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
  })
}

// 用户名称 get 方法
export function getUserName(params) {
  return request({
    url: api.UserName,
    method: 'get',
    params,
    hideloading: true
  })
}

// 用户名称 get 方法
export function banksretrieveAll(params) {
  return request({
    url: api.banksretrieveAll,
    method: 'get',
    params,
    hideloading: true
  })
}
// 用户名称 get 方法
export function recommendBankall(data) {
  return http(api.recommendBankall, data , 'GET',true ,)
}
// 用户名称 get 方法
export function recommendBankretrieve(data) {
  return http(api.recommendBankretrieve, data , 'GET',true ,)
}
export function bannerall(data) {
  return http(api.bannerall, data , 'GET',true ,)
}
export function incentivePolicyall(data) {
  return http(api.incentivePolicyall, data , 'GET',true ,)
}
