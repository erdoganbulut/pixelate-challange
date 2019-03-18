import Vue from 'vue';

import BootstrapVue from 'bootstrap-vue';

import VueKonva from 'vue-konva';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);

Vue.use(VueKonva);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
