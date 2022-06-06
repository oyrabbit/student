<template>
  <Header title="登录" />
  <main>
    <Login />
  </main>
</template>

<script setup>
import Header from '@/components/AppHeader'
import Login from '@/views/login/IndexView'
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
