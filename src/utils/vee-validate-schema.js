// 定义校验规则提供给vee-validate组件使用
export default {
  // 校验account
  number(value) {
    // value是将来使用该规则的表单元素的值
    // 1. 必填
    // 2. 6-20个字符，需要以字母开头
    // 如何反馈校验成功还是失败，返回true才是成功，其他情况失败，返回失败原因。
    if (!value) return '请输入学号'
    if (!/^\d{10}$/.test(value)) return '学号是10个数字'
    return true
  },
  password(value) {
    if (!value) return '请输入密码'
    if (!/^\w{6,24}$/.test(value)) return '密码是6-24个字符'
    return true
  },
}
