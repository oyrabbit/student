<template>
  <div class="timetable">
    <div class="header">
      <div>
        <span>学年</span
        ><select>
          <option>2021-2022</option>
          <option>全部</option>
          <option>2020-2021</option>
          <option>2019-2020</option>
        </select>
      </div>
      <div>
        <span>学期</span
        ><select>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div>查询</div>
      <div @click="getPDF()">输出pdf</div>
    </div>
    <div class="content" id="content" ref="content">
      <table>
        <tbody>
          <tr :key="item.id" v-for="item in timetable.content">
            <td :key="item2.id" v-for="item2 in item">
              <span :key="item3.id" v-for="item3 in item2">{{ item3 }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import htmlToPdf from '@/utils/htmlToPdf'
import { Gettimetable } from '@/api/user'

const timetable = ref([])
const getPDF = () => {
  htmlToPdf.downloadPDF(document.querySelector('#content'), '我的PDF')
}
Gettimetable().then((data) => {
  timetable.value = data.table
})
</script>

<style scoped lang="scss">
.timetable {
  padding: 20px 0;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 0 25%;
    div {
      text-align: center;
      color: #fff;
      line-height: 45px;
      &:nth-child(1),
      &:nth-child(2) {
        span {
          padding: 0 20px;
          color: #000;
          font-size: 30px;
        }
        select {
          width: 200px;
        }
      }
      &:nth-child(2) {
        select {
          width: 100px;
        }
      }
      &:nth-child(n + 3) {
        width: 120px;
        height: 45px;
        background-color: $Color;
        cursor: pointer;
        border-radius: 4px;
      }
    }
  }

  #content {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 50px;
    font-size: 16px;
    table,
    tr,
    td {
      border: 2px solid rgb(203, 203, 203);
      border-collapse: collapse;
    }
    tr {
      td {
        width: 150px;
        height: 80px;
        padding: 5px;
        span {
          display: block;
        }
        &:first-child {
          width: 120px;
          font-weight: bold;
          span {
            display: inline-block;
          }
        }
        &:nth-child(2) {
          width: 50px;
          span {
            display: inline-block;
          }
        }
      }
    }
    tr:first-child {
      td {
        height: 40px;
        font-weight: bold;
        span {
          display: inline-block;
        }
      }
    }
  }
}
</style>
