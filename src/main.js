import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router'
import routers from 'routers'

Vue.use(iView);
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    routes: routers
})

new Vue({
    render: h => h(App),
}).$mount('#app')
