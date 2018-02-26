import Vue from 'vue'
import Vuex from 'vuex'
import price from './modules/price'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    price
  }
})
