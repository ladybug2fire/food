<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <template v-for="item in goodlist">
      <div :key="item.type" v-if="item.count > 0">
        <img style="width:50px" src="../assets/img/huaha.png" alt="">
        <span>{{item.type}}</span>
        &nbsp; {{item.count}}
        <el-button size="small" @click="modify(item.type, 1)">+</el-button>
        <el-button size="small" @click="modify(item.type, -1)">-</el-button>
      </div>
    </template>
    <el-button type="primary" size="small" v-if="goodCount > 0">立减购买</el-button>
    <div v-else>
      这里空空如也快去
      <router-link to='/shop'><el-button type="primary" size="small">商城</el-button></router-link>看看
    </div>
  </div>
</template>

<script>
/**
 * 菜单详情
 */
import GoodItem from "@/components/good/GoodItem";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
export default {
  components: {
    myBreadCrumb,
    GoodItem
  },
  computed: {
    goodlist() {
      return this.$store.getters.goodlist;
    },
    goodCount(){
      return this.$store.getters.goodcount;
    }
  },
  data() {
    return {
      routes: [{ name: "首页", url: "/home" }, { name: "菜篮子" }]
    };
  },
  methods: {
    modify(type, count) {
      this.$store.commit("addGood", {
        type: type,
        count: count
      });
    }
  }
};
</script>

<style scoped>
</style>