<template>
  <div class="main-menu" >
    <div class="menu-items">
      <div class="menu-item" @click="jump('/home')">首页</div>
      <menu-item title="菜谱大全" />
      <menu-item title="饮食健康" />
      <div class="menu-item" @click="jump('/menus')">美食菜单</div>
      <div class="menu-item" @click="jump('/shop')">菜市场</div>
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  components:{
    MenuItem,
  },
  data() {
    return {
      menuShow: false,
      fitShow: false,
    };
  },
  methods:{
    jump(url){
      this.$router.replace(url);
    }
  }
};
</script>
<style lang="less">
  @import url('./index.less');
</style>