<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb />
    </div>
    <div class="tabbar-right">
      <Settings />
    </div>
  </div>
</template>
<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Settings from './setting/index.vue'
</script>

<style lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  background-color: rgb(214, 218, 210);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, white, rgb(213, 133, 133), white);
  .tabbar-left {
    display: flex;
    margin-left: 20px;
  }
  .tabbar-right {
    display: flex;
  }
}
</style>
