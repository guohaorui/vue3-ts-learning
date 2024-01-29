<template>
  <h1>测试SVG</h1>

  <svg-icon name="lock" color="pink" width="100px" height="100px"></svg-icon>
  <Pagination />
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <el-button type="success" size="small" :icon="Edit">编辑</el-button>

  <div>
    <h1>测试sass</h1>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'
import { onMounted } from 'vue'

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: $base-color;
  }
}

.box {
  width: 600px;
  height: 400px;
  background: black;

  h1 {
    color: red;
  }
}
</style>
