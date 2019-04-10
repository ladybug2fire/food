<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <food :list="foods"/>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import Food from "@/components/Food";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import {getMenu} from '@/api/menu'
export default {
  components: {
    myBreadCrumb,
    Food
  },
  data() {
    return {
      routes:[
        { name: "首页", url: "/home" },
        { name: "菜单", url: "/favorite" },
        { name: "菜单详情" }
      ],
      menuid: this.$route.query.id,
      foods: []
    };
  },
  mounted(){
    getMenu({params: {id: this.menuid}}).then(res=>{
      if(res.data.code === 200){
        this.$set(this, 'foods', res.data.data.foods)
      }
    })
  }
};
</script>

<style scoped>
</style>