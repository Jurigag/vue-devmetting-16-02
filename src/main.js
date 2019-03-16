import Vue from 'vue'
import vee from 'vee-validate';
import task2 from './task2.vue';
import task3 from './task3.vue';
import vuex from 'vuex';
import task4 from './task4.vue';
import task5 from './task5.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './stores/clues';

library.add(faSort, faSortUp, faSortDown);

Vue.config.productionTip = false;
Vue.use(vee);
Vue.use(vuex);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  store,
  render: h => h(task5),
}).$mount('#app')
