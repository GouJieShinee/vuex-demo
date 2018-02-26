<template>
  <div id="nav">
      <router-link to="/home" tag="a" class="nav-item">Shopping Cart</router-link>
      <router-link to="/goodDetail" tag="a" class="nav-item">iphone</router-link>
      <router-link to="/cart" tag="a" class="nav-item">cart</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
    display: inline-block;
    padding: 0 14px;
    height: 38px;
    line-height: 38px;
    color: #666;
  }

  .router-link-active {
    background: #ddd;
  }
}
</style>



