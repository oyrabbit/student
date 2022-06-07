// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        token: '',
        number: '',
        name: '',
        sex: '',
        nation: '',
        birthday: '',
        rdate: '',
        id_type: '',
        id_num: '',
        native_place: '',
        outlook: '',
        grade: '',
        college: '',
        major: '',
        classname: '',
      },
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUser(state, payload) {
      state.profile = payload
    },
  },
}
