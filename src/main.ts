import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'virtual:svg-icons-register'
import ids from 'virtual:svg-icons-names'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })

// 配置全局组件
// 方法一：
// import SvgIcon from '@/components/SvgIcon/index.vue'
// app.component('SvgIcon', SvgIcon)
// 方法二：
import globalComponent from '@/components'
app.use(globalComponent)

// console.log(import.meta.env)
console.log('ids', ids)
console.log(app)

// 引入模板的全局样式
import '@/styles/index.scss'

// 测试假接口

import axios from 'axios'
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '11112211',
  },
})

app.mount('#app')
