const types = {
  ADD_TO_CART: "addToCart",
  CHECK_ITEM: "checkItem",
  CHECKOUT_ITEM: "checkoutItem",
  SELECT_NO: "selectNo",
  SELECT_ALL: "selectAll",
  MOVE_CART: "moveToCart",
  PRICE: 8000
}

const state = {
  totalMoney: 0,
  cartNum: 0, // 购物车数量
  hasSelectedNum: 0, // 已经选择的商品数量
}

const getters = {
  getCartNum(state) {
    return state.cartNum;
  },
  getMoney(state) {
    return state.totalMoney;
  },
  getSelectedNum(state) {
    return state.hasSelectedNum
  }
}

const actions = {
  // 添加到购车车
  [types.ADD_TO_CART]({
    commit
  }, payload) {
    commit(types.ADD_TO_CART, payload.goodId);
  },
  // 选中购物车商品
  [types.CHECK_ITEM]({
    commit
  }, payload) {
    commit(types.CHECK_ITEM, payload.num);
  },
  //   取消选中购物车商品
  [types.CHECKOUT_ITEM]({
    commit
  }, payload) {
    commit(types.CHECKOUT_ITEM, payload.num);
  },
  //   取消全部选中
  [types.SELECT_NO]({
    commit
  }) {
    commit(types.SELECT_NO);
  },
  //   全部选中
  [types.SELECT_ALL]({
    commit
  }) {
    commit(types.SELECT_ALL);
  },
  //   删除购物车
  [types.MOVE_CART]({
    commit
  }, payload) {
    commit(types.MOVE_CART, payload.ifSelected);
  }
}

const mutations = {
  // 添加到购车车
  [types.ADD_TO_CART](state, goodId) {
    state.cartNum++;
  },
  // 选中购物车商品
  [types.CHECK_ITEM](state, num) {
    state.totalMoney += types.PRICE * num;
    state.hasSelectedNum++;
  },
  //   取消选中购物车商品
  [types.CHECKOUT_ITEM](state, num) {
    state.totalMoney -= types.PRICE * num;
    state.hasSelectedNum--;
  },
  //   取消全部选中
  [types.SELECT_NO](state) {
    state.hasSelectedNum = 0;
  },
  //   全部选中
  [types.SELECT_ALL](state) {
    state.hasSelectedNum = state.cartNum;
  },
  //   删除购物车
  [types.MOVE_CART](state, ifSelected) {
    if (ifSelected) {
      state.hasSelectedNum--;
    }
    state.cartNum--;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
