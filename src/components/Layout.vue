<template>
  <div>
    <my-header></my-header>
    <main-menu></main-menu>
    <router-view/>
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

<style scoped>
</style>