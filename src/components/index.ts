import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import { App } from 'vue'
// 引入全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
console.log(ElementPlusIconsVue)

const allGlobalComponent = { SvgIcon, Pagination }
console.log(allGlobalComponent)

// 对外暴露插件对象
export default {
  install(app: App) {
    // 注册项目全部全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
      console.log(allGlobalComponent[key])
      console.log(key)
    })
    // 图标注册为全局组件
    console.log(Object.entries(ElementPlusIconsVue))
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
