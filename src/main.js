import Vue from 'vue';
import App from './App.vue';
import 'expose-loader?$!expose-loader?jQuery!jquery'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
