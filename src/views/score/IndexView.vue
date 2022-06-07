<template>
  <div class="timetable">
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
      <div>
        <span>学期</span
        ><select>
          <option>2</option>
          <option>1</option>
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
            <th>课程名称</th>
            <th>课程性质</th>
            <th>学分</th>
            <th>成绩</th>
            <th>绩点</th>
            <th>开课学院</th>
            <th>教学班级</th>
            <th>任课老师</th>
            <th>考核方式</th>
            <th>成绩是否作废</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="item.id" v-for="item in score">
            <td>{{ item.school_year }}</td>
            <td>{{ item.term }}</td>
            <td>{{ item.course_name }}</td>
            <td>{{ item.course_nature }}</td>
            <td>{{ item.credit }}</td>
            <td>{{ item.score }}</td>
            <td>{{ item.grade_point }}</td>
            <td>{{ item.college }}</td>
            <td>{{ item.class }}</td>
            <td>{{ item.teacher }}</td>
            <td>{{ item.assessment_method }}</td>
            <td>{{ item.is_invalid }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Getscore } from '@/api/user'

const score = ref([])

Getscore().then((data) => {
  score.value = data.scoreList
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
