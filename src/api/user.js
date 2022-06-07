import request from '@/utils/request'

export const studentLogin = ({ number, password }) => {
  return request('/student/login', 'post', { number, password })
}

export const Getmeasures = () => {
  return request('/measures', 'get')
}

export const Gettimetable = () => {
  return request('/timetable', 'get')
}

export const Getreward = () => {
  return request('/reward', 'get')
}

export const Getpunish = () => {
  return request('/punish', 'get')
}

export const Getscore = () => {
  return request('/score', 'get')
}

export const Editmeasures = ({
  measureId,
  ideology,
  academic,
  development,
}) => {
  return request(`/measures/${measureId}`, 'put', {
    ideology,
    academic,
    development,
  })
}
