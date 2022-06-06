<template>
  <div class="tab">
    <ul>
      <li
        :key="item.id"
        v-for="(item, index) in data"
        :class="{ active: currentIndex == index }"
        v-on:click="change(index, item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentIndex = ref(0)
const data = ref([
  {
    id: 1,
    title: '学生画像',
    path: '/',
  },
  {
    id: 2,
    title: '综合评测·',
    path: '/measures',
  },
  {
    id: 3,
    title: '课程表',
    path: '/timetable',
  },
  {
    id: 4,
    title: '奖惩信息',
    path: '/rpinfo',
  },
  {
    id: 5,
    title: '成绩信息',
    path: '/score',
  },
])
const change = (index, path) => {
  currentIndex.value = index
  router.push(path)
}
// export default {
//   name: 'AppTab',
// }
</script>
<style scoped lang="scss">
.tab {
  margin: 50px 0;
  border-bottom: 1px solid #c1c1c1;
  ul {
    overflow: hidden;
    padding: 0;
    margin: 0;
    li {
      box-sizing: border-box;
      padding: 0;
      float: left;
      width: 130px;
      height: 43px;
      line-height: 43px;
      text-align: center;
      border: 1px solid #797979;
      border-radius: 4px;
      &.active {
        background-color: $Color;
      }
    }
    // li:first-child {
    //   border-left: 1px solid #797979;
    // }
  }
}
</style>
