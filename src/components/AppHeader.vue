<template>
  <header class="app-header">
    <div class="container">
      <p>
        {{ props.title }}
      </p>
    </div>
  </header>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>
<style scoped lang="scss">
.app-header {
  background-color: $Color;
  .container {
    height: 60px;
    line-height: 60px;
    padding-left: 30px;
    color: #fff;
    font-size: 24px;
  }
}
</style>
