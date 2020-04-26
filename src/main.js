import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Flickeringfont from './components/Flickeringfont.vue'
import Home from './components/Home.vue'
import Windows98 from './components/Windows98.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes =  [  
  {path: "/", component: Home, meta: {title:'Nina Voelker'}},
  {path: "/wtf", component: Flickeringfont, meta: {title:'Storytime'}},
  {path: "/98", component: Windows98, meta: {title:'This is aTime Travel'}},
]

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
