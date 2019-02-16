import Vue from 'vue'
import vee from 'vee-validate';
import task2 from './task2.vue';
import task3 from './task3.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSort, faSortUp, faSortDown);

Vue.config.productionTip = false;
Vue.use(vee);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  render: h => h(task3),
}).$mount('#app')
