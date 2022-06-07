<template>
  <div class="home">
    <div>
      <p>
        学号：<span>{{ profile.number }}</span>
      </p>
      <p>
        姓名：<span>{{ profile.name }}</span>
      </p>
      <p>
        性别：<span>{{ profile.sex }}</span>
      </p>
      <p>
        民族：<span>{{ profile.nation }}</span>
      </p>
      <p>
        出生日期：<span>{{ profile.birthday }}</span>
      </p>
      <p>
        入学日期：<span>{{ profile.rdate }}</span>
      </p>
      <p>
        证件类型：<span>{{ profile.id_type }}</span>
      </p>
      <p>
        证件号码：<span>{{ profile.id_num }}</span>
      </p>
      <p>
        籍贯：<span>{{ profile.native_place }}</span>
      </p>
      <p>
        政治面貌：<span>{{ profile.outlook }}</span>
      </p>
    </div>
    <div>
      <img src="../../assets/images/img.jpg" alt="" />
      <p>
        年级：<span>{{ profile.grade }}</span>
      </p>
      <p>
        学院：<span>{{ profile.college }}</span>
      </p>
      <p>
        专业：<span>{{ profile.major }}</span>
      </p>
      <p>
        班级：<span>{{ profile.classname }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// 使用vuex中的state需要设置计算属性，否则不是响应式
const profile = computed(() => {
  return store.state.user.profile
})
</script>

<style scoped lang="scss">
.home {
  padding: 30px 0;
  display: flex;
  justify-content: center;
  div {
    width: 30%;
    text-align: left;
    img {
      width: 150px;
      margin: 20px 0;
    }
    p {
      padding: 10px 0;
      span {
        padding-left: 20px;
      }
    }
  }
}
</style>
