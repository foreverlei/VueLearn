// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import mapState from 'vuex'
import './config/rem'



Vue.config.productionTip = false

const store = new Vuex.Store(
  {
    state:{

    },
    mutations:{
      increase(state){

      }
    },
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
