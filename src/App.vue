<template>
  <div id="app" class="flex flex-wrap">
    <Nav></Nav>
    <div class="flex-con">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  min-width: 320px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
