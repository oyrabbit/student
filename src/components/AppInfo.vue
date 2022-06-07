<template>
  <div class="info">
    <div>
      学号：<span>{{ profile.number }}</span>
    </div>
    <div>
      姓名：<span>{{ profile.name }}</span>
    </div>
    <div @click="logout()">退出登录</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
// 使用vuex中的state需要设置计算属性，否则不是响应式
const profile = computed(() => {
  return store.state.user.profile
})

// 退出登录
// 1. 清空本地存储信息和vuex的用户信息
// 2. 跳转登录
const router = useRouter()
const logout = () => {
  store.commit('user/setUser', {})
  sessionStorage.setItem('current_index', '')
  router.push('/login')
}
</script>
<style scoped lang="scss">
.info {
  display: flex;
  justify-content: space-between;
  div {
    height: 40px;
    line-height: 40px;
    span {
      padding: 0 10px;
    }
    &:last-child {
      width: 100px;
      text-align: center;
      color: #fff;
      background-color: $Color;
      border-radius: 12px;
      cursor: pointer;
    }
  }
}
</style>
