<template>
  <div class="measures">
    <div class="header">
      <div>
        <span>学年</span
        ><select>
          <option>全部</option>
          <option>2021-2022</option>
          <option>2020-2021</option>
          <option>2019-2020</option>
        </select>
      </div>
      <div>查询</div>
      <div @click="edit()">填写</div>
    </div>
    <div class="content">
      <table>
        <thead>
          <tr>
            <th>学年</th>
            <th>思想素质</th>
            <th>学业能力</th>
            <th>发展能力</th>
            <th>综合评测总分</th>
            <th>综合评测排名</th>
            <th>学业测评排名</th>
            <th :class="{ display: isdisplay }">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="(item, index) in measures">
            <td>{{ item.school_year }}</td>
            <td>
              {{ item.ideology
              }}<input
                class="inputview"
                :style="{
                  display:
                    isdisplay == 0 && editid == index ? 'inline-block' : 'none',
                }"
                type="text"
                v-model.number="info.ideology"
              />
            </td>

            <td>
              {{ item.academic
              }}<input
                class="inputview"
                :style="{
                  display:
                    isdisplay == 0 && editid == index ? 'inline-block' : 'none',
                }"
                type="text"
                v-model.number="info.academic"
              />
            </td>
            <td>
              {{ item.development
              }}<input
                class="inputview"
                :style="{
                  display:
                    isdisplay == 0 && editid == index ? 'inline-block' : 'none',
                }"
                type="text"
                v-model.number="info.development"
              />
            </td>
            <td>
              {{
                parseInt(
                  item.ideology * 0.15 +
                    item.academic * 0.7 +
                    item.development * 0.15
                )
              }}
            </td>
            <td>{{ item.comprehensive_ranking }}</td>
            <td>{{ item.academic_ranking }}</td>
            <td :class="{ display: isdisplay }">
              <div
                class="btn"
                :style="{
                  display:
                    editid == index || editid == null ? 'inline-block' : 'none',
                }"
                @click="editType == 0 ? editItem(index) : submitItem(index)"
              >
                {{ editType == 0 ? '编辑' : '提交' }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Getmeasures } from '@/api/user'
import { Editmeasures } from '@/api/user'
import Message from '@/components/library/Message'

const measures = ref([])
const isdisplay = ref(1)
const editType = ref(0)
const editid = ref(null)
const info = reactive({
  measureId: '',
  ideology: 0,
  academic: 0,
  development: 0,
})

Getmeasures().then((data) => {
  measures.value = data.measure_list
})

const edit = () => {
  isdisplay.value = 0
}

const editItem = (id) => {
  info.measureId = measures.value[id]._id
  info.ideology = measures.value[id].ideology
  info.academic = measures.value[id].academic
  info.development = measures.value[id].development
  editType.value = 1
  editid.value = id
  console.log(measures.value[id]._id)
}
const submitItem = (id) => {
  Editmeasures(info)
    .then((data) => {
      // 成功
      // 1. 存储信息
      measures.value[id] = data.measures
      // 2. 提示
      Message({ type: 'success', text: '修改成功' })
    })
    .catch((e) => {
      // 失败
      Message({
        type: 'error',
        text: e.response.data.error || '修改失败！',
      })
    })
  editType.value = 0
  isdisplay.value = 1
  editid.value = null
}
</script>

<style scoped lang="scss">
.measures {
  padding: 20px 0;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 25%;
    div {
      text-align: center;
      color: #fff;
      line-height: 45px;
      &:nth-child(1) {
        span {
          padding: 0 20px;
          color: #000;
          font-size: 30px;
        }
        select {
          width: 200px;
        }
      }
      &:nth-child(n + 2) {
        width: 120px;
        height: 45px;
        background-color: $Color;
        cursor: pointer;
        border-radius: 4px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 50px;
    table,
    tr,
    td,
    th {
      text-align: center;
      position: relative;
      border: 2px solid rgb(203, 203, 203);
      border-collapse: collapse;
      .display {
        display: none;
      }
      .inputview {
        margin: 0 auto;
        z-index: 9;
        position: absolute;
        width: 80px;
        height: 40px;
        text-align: center;
        border: 1px solid $Color;
        border-radius: 10px;
        margin: -5px -53px;
      }
      .inputdisplay {
        display: none;
      }
      .btn {
        width: 100px;
        height: 40px;
        margin: 0 auto;
        line-height: 40px;
        color: #fff;
        background-color: $Color;
        border-radius: 4px;
      }
    }
    th {
      width: 150px;
      height: 40px;
    }
    td {
      width: 150px;
      height: 80px;
    }
  }
}
</style>
