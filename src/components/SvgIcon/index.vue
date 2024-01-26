<script setup lang="ts">
// 接收父组件传递过来的参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<template>
  <!--  svg: 图标外层容器节点，内部需要与use标签结合-->
  <svg :style="{ width, height }">
    <use :href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped></style>
