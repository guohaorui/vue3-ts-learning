<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到瑞兹平台</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="login_loading"
              class="login-btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
let userStore = useUserStore()
let loginForms = ref()
let $router = useRouter()
// 定义变量控制按钮加载效果
let login_loading = ref(false)

// 收集账号和密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
let rules = {
  username: [
    // required表示这个字段必须要校验
    { required: true, message: 'Please input username', trigger: 'blur' },
    {
      required: true,
      min: 4,
      max: 10,
      message: 'Length of account needs to be from 4 to 10.',
      trigger: 'blur',
    },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    {
      required: true,
      min: 4,
      max: 10,
      message: 'Length of password needs to be from 4 to 10.',
      trigger: 'blur',
    },
  ],
}
const login = async () => {
  // 保证所有表单项校验通过后再发起请求
  console.log(loginForms.value)
  // let result = loginForms.value.validate()
  // console.log(result)

  // 1. 通知仓库发登录请求
  // 2. 请求成功后展示数据
  // 3. 请求失败需要弹出登录失败信息

  // 也可以用then写法
  try {
    login_loading.value = true
    await userStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi, ${getTime()}好`,
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  } finally {
    login_loading.value = false
  }
}
</script>

<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url(@/assets/images/login_form.jpg) no-repeat;
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
