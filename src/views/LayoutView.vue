<template>
  <Header title="学生画像" />
  <main>
    <Info />
    <Tab />
    <router-view />
  </main>
  <!-- <footer>底部</footer> -->
</template>

<script setup>
import Header from '@/components/AppHeader'
import Info from '@/components/AppInfo'
import Tab from '@/components/AppTab'
import { computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
// 使用vuex中的state需要设置计算属性，否则不是响应式
const profile = computed(() => {
  return store.state.user.profile
})
const router = useRouter()
onBeforeMount(() => {
  if (!profile.value.token) {
    router.push('/login')
  }
})
</script>

<style scoped lang="scss">
main {
  margin: 20px;
  padding: 40px;
  height: auto;
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0 0 20px #888888;
}
</style>
