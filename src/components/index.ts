import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import { App } from 'vue'

const allGlobalComponent = { SvgIcon, Pagination }
console.log(allGlobalComponent)

// 对外暴露插件对象
export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
      console.log(allGlobalComponent[key])
      console.log(key)
    })
  },
}
