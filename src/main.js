import Vue from 'vue'
import VueRouter from 'vue-router'

//import App from './App.vue'
//import routes from './routes'

Vue.config.productionTip = false;
Vue.use(VueRouter)

//console.log(routes)
var routes =  [
   { path: '/', component: {
      template: "<div>TEST2</div>",
      mounted () {
         console.log("waddap", this)
      }
   } },
]

const router = new VueRouter({
   mode: 'history',
   routes,
   mounted () {
      console.log("bler", this);
   }
})

new Vue({
   template: `
   <div>
      hmm
   </div>
   `,
   mounted () {
         console.log("waddap main", this)
   }
}).$mount('#app')
