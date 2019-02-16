import Vue from 'vue'
import vee from 'vee-validate';
import task2 from './components/task2.vue'

Vue.config.productionTip = false
Vue.use(vee);

new Vue({
  render: h => h(task2),
}).$mount('#app')
