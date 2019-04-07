<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <food :list="8"/>
  </div>
</template>

<script>
import Food from "@/components/Food";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb,
    Food
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>