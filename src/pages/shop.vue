<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <good-item :list="8"/>
  </div>
</template>

<script>
/**
 * 商城
 */
import GoodItem from "@/components/good/GoodItem";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb,
    GoodItem
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "商城"},
      ]
    };
  }
};
</script>

<style scoped>
</style>