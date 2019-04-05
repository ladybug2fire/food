<template>
  <div>
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";
export default {
  components: {
    MyHeader
  }
};
</script>

<style scoped>
</style>