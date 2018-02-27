<template>
  <div id="nav">
      <router-link to="/home" tag="a" class="nav-item">Shopping Cart</router-link>
      <router-link to="/goodDetail" tag="a" class="nav-item">iphone</router-link>
      <router-link to="/cart" tag="a" class="nav-item">cart
        <span class="cart-num">{{cartNum}}</span>
      </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      cartNum: "getCartNum"
    })
  }
};
</script>
<style scoped lang="scss">
#nav {
  width: 100%;
  background: #efefef;
  border: 1px solid #ddd;
  font-size: 0;

  .nav-item {
    position: relative;
    display: inline-block;
    padding: 0 14px;
    height: 38px;
    line-height: 38px;
    color: #666;
  }

  .router-link-active {
    background: #ddd;
  }

  .cart-num {
    position: absolute;
    top: 5px;
    right: 0px;
    width: 14px;
    height: 14px;
    line-height: 14px;
    border-radius: 90px;
    background: red;
    color: #fff;
    text-align: center;
  }
}
</style>



