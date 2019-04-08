<template>
  <div>
        <my-bread-crumb :routes="routes"/>
    <div class="detail-left">
        <h1>蒜蓉炒花哈</h1>
        <el-button size="small">收藏</el-button>
        <img src="../assets/img/huaha.png" alt>
    </div>
  </div>
</template>

<script>
/**
 * 菜谱详情
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb
  },
  data() {
    return {
      routes: [{ name: "首页", url: "/home" }, {name: '菜谱大全', url: ''}, { name: "详情" }]
    };
  }
};
</script>

<style lang="less" scoped>
.detail-left{
    padding: 0;
    width: 60vw;
    img{
        margin-top: 20px;
        width: 100%;
    }
}
</style>