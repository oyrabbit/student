import request from '@/utils/request'

export const studentLogin = ({ number, password }) => {
  return request('/student/login', 'post', { number, password })
}
