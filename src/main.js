import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Flickeringfont from './components/Flickeringfont.vue'
import Home from './components/Home.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes =  [  
  {path: "/", component: Home},
  {path: "/wtf", component: Flickeringfont},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
