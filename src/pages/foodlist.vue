<template>
  <div>
    <my-bread-crumb :routes="routes"/>
  </div>
</template>

<script>
/**
 * 菜谱大全/菜谱搜索/饮食健康/不同的筛选条件（通过路由区分）
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "菜谱大全", url: "/profile" },
        { name: "基础信息" }
      ]
    };
  }
};
</script>

<style scoped>
</style>