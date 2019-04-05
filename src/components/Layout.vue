<template>
  <div>
    <my-header></my-header>
    <main-menu></main-menu>
    <div class="main-section">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
import MainMenu from "@/components/menu/MainMenu";

export default {
  components: {
    MyHeader,
    MainMenu
  }
};
</script>

<style lang="less" scoped>
.main-section{
  padding: 0 10vw;
}
</style>