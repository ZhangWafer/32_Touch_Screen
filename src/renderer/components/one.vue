<template>
  <div>
    <el-container class="backgroundClass">
      <el-header>
        <el-row>
          <el-col :span="8">
            &nbsp
          </el-col>
          <el-col :span="8"
            style="text-align:center">
            <el-tag effect="dark"
              style="display:inline-block;font-size:36px;width:200px;height:42px;text-align:center;line-height:36px">智慧饭堂</el-tag>
          </el-col>
          <el-col :span="8">
            &nbsp
          </el-col>

        </el-row>

      </el-header>
      <el-main></el-main>
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
      testValue: false,
      url: '../img/278010.jpg',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down']
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
    }
  }
}
</script>

<style>
.backgroundClass {
  background: url("../img/278010.jpg") no-repeat;
  height: 900px;
  background-size: 100% 100%;
}
</style>