<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu background-color="#001529" text-color="white">
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
          <!-- 静态菜单 -->
          <!-- <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item> -->
          <!-- 折叠菜单 -->
          <!-- <el-sub-menu index="3">
            <template #title>权限菜单</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">用户管理</el-menu-item>
            <el-menu-item index="3-3">用户管理</el-menu-item>
          </el-sub-menu> -->
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar">456</div>
    <!-- 内容展示区域 -->
    <div class="layout-main">
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'

// 获取用户相关的仓库
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;
  width: 100%;
  .layout-slider {
    width: $base-menu-width;
    background: $base-menu-background;
    height: 100vh;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout-tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
    top: 0px;
    position: fixed;
    left: $base-menu-width;
  }
  .layout-main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background: yellowgreen;
    top: $base-tabbar-height;
    left: $base-menu-width;
    padding: 20px;
    overflow: auto;
  }
}
.scrollbar-demo-item {
  color: white;
}
</style>
