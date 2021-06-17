<template>
  <el-container class="home">
    <el-aside>
      <aside-nav />
    </el-aside>
    <el-container class="home-container">
      <el-header class="home-head"> header </el-header>
      <el-main class="home-main">main</el-main>
      <el-footer>footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import AsideNav from "components/asideNav";
export default {
  components: {
    AsideNav,
  },
};
</script>

<style lang="sass" scoped>
.home
    height: 100vh
    &-container
        min-width: 900px
    &-head
        background-color: #fff
    &-main
        margin: 10px
        background-color: #fff
</style>