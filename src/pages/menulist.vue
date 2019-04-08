<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <el-button type="primary" size="small" @click="createNew">创建新菜单</el-button>
    <div class="favor-container" @click="jumpDetail">
      <menu-group></menu-group>
    </div>
  </div>
</template>

<script>
/**
 * 美食菜单就是共享的菜单合集
 */
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import menuGroup from "@/components/MenuGroup"
export default {
  components: {
    myBreadCrumb,
    menuGroup
  },
  data() {
    return {
      routes: [
        { name: "首页", url: "/home" },
        { name: "个人中心", url: "/profile" },
        { name: "我的菜单" }
      ]
    };
  },
  methods:{
    jumpDetail(){
      this.$router.replace('/favordetail')
    },
    createNew(){
      
    }
  }
};
</script>

<style lang="less" scoped>
.favor-container{
  cursor: pointer;
}
</style>