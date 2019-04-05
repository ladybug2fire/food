<template>
  <el-row>
    <el-col :span="8" v-for="(o) in 10" :key="o">
      <el-card :body-style="{ padding: '0px'}" class="food-item">
        <img src="../assets/img/danhuang.jpg" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data(){
    return {
      currentDate: new Date(),
    }
  }
};
</script>
<style>
.food-item{
  margin: 10px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 150px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>