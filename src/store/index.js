import Vue from 'vue'
import Vuex from 'vuex'
import price from './modules/price'
import cart from './modules/cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    price,
    cart
  }
})
