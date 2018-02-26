const types = {
  CHANGE_PRICE: "changePrice"
}

const state = {
  price: 0
}
const getters = {
  getPrice(state) {
    return state.price
  }
}

const actions = {
  [types.CHANGE_PRICE]({
    commit
  }, payload) {
    //   把载荷发送给mutations
    commit(types.CHANGE_PRICE, payload.type)
  }
}

const mutations = {
  [types.CHANGE_PRICE](state, type) {
    state.price = 8000 + 400 * type;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
