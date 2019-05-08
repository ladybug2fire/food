<template>
  <el-row>
    <el-col :span="8" v-for="(o) in list" :key="o._id">
      <el-card :body-style="{ padding: '0px'}" class="food-item">
        <img :src="HOST+o.picUrl" class="image">
        <div style="padding: 14px;">
          <span>{{o.goodname}}</span>
          <div class="description">
            {{o.desc}}
          </div>
          <div class="bottom">
            <div class="price">¥ {{ o.price }}</div>
            <div class="remain">库存:{{o.amount}}</div>
          </div>
          <el-button type="text" class="button" @click="addGood(o)" v-if="username">加入菜篮子</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import {HOST} from '../../../config/myconfig'
export default {
  props:['list'],
  data(){
    return {
      HOST,
      currentDate: new Date(),
    }
  },
  computed:{
    goodlist() {
      return this.$store.getters.goodlist;
    },
    username(){
      return this.$store.getters.username;
    }
  },
  methods:{
    addGood(o){
      const found = this.goodlist.find(e=>e._id === o._id)
      if(found && found.count >= found.amount || o.amount < 1){
        this.$message.error('库存不够了')
        return;
      }
      this.$notify.success('已加入菜篮子')
      this.$store.commit('addGood', {
        ...o,
        count: 1,
      })
    }
  }
};
</script>
<style lang="less" scoped>
.food-item{
  margin: 10px;
}
.price {
  font-size: 16px;
  color: #F56C6C;
  font-weight: bold;
}
.description{
  font-size: 12px;
  color: #909399;
}

.bottom {
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  line-height: 12px;
  justify-content: space-between;
  .remain{
    font-size: 10px;
    color: #909399;
  }
}

.button {
  padding: 10px 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  object-fit: cover;
  height: 150px;
  cursor: pointer;
}
</style>