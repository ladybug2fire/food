<template>
  <div class="food-detail">
    <my-bread-crumb :routes="routes"/>
    <div class="detail-left">
      <h1>{{foodInfo.foodname}}</h1>
      <el-button size="small">收藏</el-button>
      <el-row>
        <el-col :span="16">
          <div v-if="foodInfo">
            <img :src="HOST+foodInfo.picUrl" alt>
          </div>
        </el-col>
        <el-col :span="8" class="info">
          <br>
          <b>准备耗时:</b> {{foodInfo.prepareTime}}
          <br>
          <b>估计用时:</b>  {{foodInfo.cookTime}}
          <br>
          <b>预估成本:</b>  {{foodInfo.price}}
          <br>
          <b>操作难度:</b>  {{foodInfo.diffculty}}
          <br>
          <b>标签:</b>  {{foodInfo.cookTime}}
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/**
 * 菜谱详情
 */
import { HOST } from "../../config/myconfig";
import myBreadCrumb from "@/components/user/myBreadCrumb.vue";
import { getFood } from "@/api/food";
export default {
  components: {
    myBreadCrumb
  },
  data() {
    return {
      HOST,
      routes: [
        { name: "首页", url: "/home" },
        { name: "菜谱大全", url: "" },
        { name: "详情" }
      ],
      foodInfo: null
    };
  },
  methods: {
    getFood() {
      getFood({
        params: {
          id: this.$route.query.id
        }
      }).then(res => {
        let data = res.data;
        if (data.code === 200) {
          this.foodInfo = data.data;
        }
      });
    }
  },
  mounted() {
    this.getFood();
  }
};
</script>

<style lang="less" scoped>
.detail-left {
  padding: 0;
  width: 60vw;
  img {
    margin-top: 20px;
    width: 100%;
  }
}
.food-detail {
  .info {
    padding-left: 20px;
  }
}
</style>