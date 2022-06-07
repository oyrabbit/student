<template>
  <div class="login">
    <Form
      ref="formCom"
      class="form"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-user"></i>
          <Field
            :class="{ error: errors.number }"
            v-model="form.number"
            name="number"
            type="text"
            placeholder="请输入学号"
          />
        </div>
        <div class="error" v-if="errors.number">
          <i class="iconfont icon-warning" />{{ errors.number }}
        </div>
      </div>
      <div class="form-item">
        <div class="input">
          <i class="iconfont icon-password"></i>
          <Field
            :class="{ error: errors.password }"
            v-model="form.password"
            name="password"
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div class="error" v-if="errors.password">
          <i class="iconfont icon-warning" />{{ errors.password }}
        </div>
      </div>
      <a @click="login()" href="javascript:;" class="btn">登 录</a>
    </Form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Form, Field } from 'vee-validate'
import { studentLogin } from '@/api/user'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import schema from '@/utils/vee-validate-schema'
import Message from '@/components/library/Message'

// 使用store
const store = useStore()
// 使用router
const router = useRouter()
// 使用route
const route = useRoute()
const formCom = ref(null)
// 表单对象数据
const form = reactive({
  account: null,
  password: null,
})

// 登录提交
const login = async () => {
  // 整体校验
  const valid = await formCom.value.validate()
  console.log(valid)
  if (valid) {
    // 发送请求
    studentLogin(form)
      .then((data) => {
        // 成功
        // 1. 存储信息
        const {
          token,
          number,
          name,
          sex,
          nation,
          birthday,
          rdate,
          id_type,
          id_num,
          native_place,
          outlook,
          grade,
          college,
          major,
          classname,
        } = data.student
        store.commit('user/setUser', {
          token,
          number,
          name,
          sex,
          nation,
          birthday,
          rdate,
          id_type,
          id_num,
          native_place,
          outlook,
          grade,
          college,
          major,
          classname,
        })
        // 2. 提示
        Message({ type: 'success', text: '登录成功！' })
        // 3. 跳转
        router.push(route.query.redirectUrl || '/')
      })
      .catch((e) => {
        // 失败
        Message({
          type: 'error',
          text: e.response.data.error || '登录失败！',
        })
      })
  }
}
</script>

<style scoped lang="scss">
// 账号容器
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  .form {
    width: 25%;
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 45px;
        > i {
          width: 34px;
          height: 45px;
          // background: #cfcdcd;
          color: rgb(79, 79, 79);
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 45px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 45px;
          line-height: 45px;
          width: 100%;
          &.error {
            border-color: $priceColor;
          }
          &.active,
          &:focus {
            border-color: $Color;
          }
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 45px;
      color: #fff;
      text-align: center;
      line-height: 45px;
      background: $Color;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
}
</style>
