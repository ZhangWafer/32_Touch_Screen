<template>
  <div>
    <el-container>
      <el-header style="background:#409eff;">
        <el-row>
          <el-col :span="8">
            <h1></h1>
          </el-col>
          <el-col :span="8"
            style="text-align:center">
            <el-tag effect="dark"
              style="font-size:40px;margin-top:10px;display:inline-block;width:200px;height:42px;text-align:center;line-height:36px">
              智慧饭堂
            </el-tag>
          </el-col>
          <el-col :span="8">
            <h1></h1>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row style="margin-top:80px">
          <el-col :span=12
            style="text-align:center;height:600px">
            <el-button type="success"
              round
              style="display:inline-block;font-size:90px;height:500px"
              class="bigButton"
              @click="goRecord()">
              消费记录
            </el-button>
          </el-col>
          <el-col :span=12
            style="text-align:center;height:600px;">
            <el-button style="display:inline-block;font-size:90px;height:500px"
              round
              type="primary"
              class="bigButton"
              @click="goJudge()">
              菜品点评
            </el-button>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$ajax = axios

export default {
  data: function () {
    return {
      testValue: false
    }
  },
  created: function () {
    console.log('created')
  },
  mounted() {
    console.log('mounted')
  },
  updated() {
    console.log('updated')
  },
  watch: {
    allsum() {
      console.log('al1sum变了！！！')
    }
  },

  methods: {
    testMethod() {
      console.log('66666666666')
    },
    goRecord(event) {
      this.$router.push({
        path: '/record'
      })
      console.log(this)
    },
    goJudge(event) {
      this.$router.push({
        path: '/judge'
      })
      console.log(this)
    }
  }
}
</script>

<style>
</style>