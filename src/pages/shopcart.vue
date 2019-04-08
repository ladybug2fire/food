<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <food :list="8"/>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import Food from "@/components/Food";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb,
    Food
  },
  data() {
    return {
      routes:[
        { name: "首页", url: "/home" },
        { name: "菜篮子" },
      ]
    };
  }
};
</script>

<style scoped>
</style>