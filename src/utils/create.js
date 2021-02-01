import Vue from 'vue'
import Notice from '@/components/Notice'

function create(Component, props) {
  const vm = new Vue({
    render: h => h(Component, { props })
  }).$mount() // 不指定宿主元素，则会创建真实dom，但不会追加操作

  // 获取真实dom
  document.body.appendChild(vm.$el)

  const comp = vm.$children[0]

  // 删除
  comp.remove = function() {
    document.body.removeChild(vm.$el)
    vm.$destroy()
  }

  return comp
}

export default {
  install(Vue) {
    Vue.prototype.$notice = function(options) {
      return create(Notice, options)
    }
  }
}
