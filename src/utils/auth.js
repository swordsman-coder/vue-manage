/*
 * @Description:
 * @Author: zjq
 * @Date: 2019-12-21 15:11:13
 * @LastEditors  : zjq
 * @LastEditTime : 2019-12-21 16:38:38
 */
import Cookies from 'js-cookie'

const TokenKey = 'myappToken'

export function getToken(token) {
  return Cookies.get(token || TokenKey)
}

export function setToken(key, val) {
  return Cookies.set(key || TokenKey, val)
}

export function removeToken(key) {
  return Cookies.remove(key || TokenKey)
}
