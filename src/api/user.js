import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/auth/login',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/auth/user',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/auth/logout',
    method: 'post'
  })
}
