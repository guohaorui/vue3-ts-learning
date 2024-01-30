<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { requestLogin } from '@/api/user'
onMounted(() => {
  requestLogin({ username: 'admin', password: '111111' })
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
