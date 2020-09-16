<template>
  <div>
    <h1> 122222222</h1>
    <el-button @click="goBack()"></el-button>
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
    goBack(event) {
      this.$router.push({
        path: '/'
      })
      console.log(this)
    }
  }
}
</script>

<style>
</style>