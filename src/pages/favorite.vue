<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    
  </div>
</template>

<script>
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "个人中心", url: "/profile" },
        { name: "我的菜单" }
      ]
    };
  }
};
</script>

<style scoped>
</style>