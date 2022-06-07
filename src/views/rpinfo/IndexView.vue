<template>
  <div class="rpinfo">
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
    </div>
    <div class="content">
      <table>
        <thead>
          <tr>
            <th>学年</th>
            <th>学期</th>
            <th>奖励项目</th>
            <th>奖励级别</th>
            <th>奖励方式</th>
            <th>奖励类型</th>
            <th>奖励金额</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in reward">
            <td>{{ item.school_year }}</td>
            <td>{{ item.term }}</td>
            <td>{{ item.project }}</td>
            <td>{{ item.level }}</td>
            <td>{{ item.way }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.money }}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>学年</th>
            <th>学期</th>
            <th>处分名称</th>
            <th>处分日期</th>
            <th>处分类别</th>
            <th>处分解除日期</th>
            <th>处分解除文号</th>
            <th>处分解除原因</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in punish">
            <td>{{ item.school_year }}</td>
            <td>{{ item.term }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.release_time }}</td>
            <td>{{ item.document_no }}</td>
            <td>{{ item.release_reason }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Getreward } from '@/api/user'
import { Getpunish } from '@/api/user'

const reward = ref([])
const punish = ref([])

Getreward().then((data) => {
  reward.value = data.rewards
})
Getpunish().then((data) => {
  punish.value = data.punishs
})
</script>

<style scoped lang="scss">
.rpinfo {
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
    text-align: center;
    padding: 50px;
    table {
      margin: 20px auto;
      margin-bottom: 60px;
    }
    table,
    tr,
    td,
    th {
      text-align: center;
      position: relative;
      border: 2px solid rgb(203, 203, 203);
      border-collapse: collapse;
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
