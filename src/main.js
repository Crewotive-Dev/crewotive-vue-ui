import Vue from 'vue'
import App from './App.vue'
import '@/plugins/globalComponents.js'
import '@/directives/UI/UIMixins.js'
Vue.config.productionTip = false

// Vue.directive('bg',{
//   bind(el,binding){

//     if(binding.modifiers['gradient'])
//       el.classList.toggle(`bg-gradient`)

//     if(binding.value)
//       el.classList.toggle(`bg-${binding.value}`)
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
