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
          <b>准备耗时:</b>
          {{foodInfo.prepareTime}}
          <br>
          <b>估计用时:</b>
          {{foodInfo.cookTime}}
          <br>
          <b>预估成本:</b>
          {{foodInfo.price}}
          <br>
          <b>操作难度:</b>
          {{foodInfo.diffculty}}
          <br>
          <b>标签:</b>
          {{foodInfo.cookTime}}
        </el-col>
      </el-row>
      <h1>评论区</h1>
      <template v-if="!reviews || reviews.length ===0 ">
        <div style="color: #606266">这里空空如也，快来占沙发吧～</div>
      </template>
      <template v-else>
        <template v-for="(reviewItem,i) in reviews">
          <review :data="reviewItem" :key="i"/>
        </template>
      </template>

      <div class="review-block" v-if="username">
        <h4>评论</h4>
        <el-rate v-model="myrate" show-score></el-rate>
        <el-input
          type="textarea"
          class="review-area"
          v-model="myreview"
          placeholder="说说你的看法"
          name="review"
        />
        <div class="publish-btn">
          <el-button type="primary" @click="submitData()">发布</el-button>
        </div>
      </div>
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
import { publish, list } from "@/api/review";
import Review from "@/components/Review";
import _ from "lodash";

export default {
  components: {
    myBreadCrumb,
    Review
  },
  data() {
    return {
      HOST,
      routes: [
        { name: "首页", url: "/home" },
        { name: "菜谱大全", url: "" },
        { name: "详情" }
      ],
      foodInfo: {},
      reviews: null,
      myreview: null,
      myrate: null
    };
  },
  computed: {
    username() {
      return this.$store.getters.username;
    },
    userid() {
      return this.$store.getters.userid;
    }
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
          this.$set(this, "foodInfo", data.data);
          this.$nextTick(() => {
            this.getReviews();
          });
        }
      });
    },
    getReviews() {
      list({
        params: {
          id: this.foodInfo._id
        }
      }).then(res => {
        this.$set(this, "reviews", _.get(res, "data.data"));
      });
    },
    submitData() {
      publish({
        username: this.username,
        userid: this.userid,
        desc: this.myreview,
        star: this.myrate,
        foodid: this.foodInfo._id
      }).then(res => {
        let data = res.data;
        if (data.code === 200) {
          this.$message("发布成功");
          this.getReviews();
        } else {
          this.$message.error("发布失败:" + data.msg);
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
.review-block {
  width: 60%;
  .publish-btn {
    margin-top: 10px;
  }
  .review-area {
    margin-top: 10px;
  }
}
</style>