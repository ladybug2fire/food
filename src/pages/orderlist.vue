<template>
  <div>
    <my-bread-crumb :routes="routes"/>
    <div class="order-list">
      <el-table :data="tableData" border height="400" style="width: 100%">
        <el-table-column prop="name" label="订单号"></el-table-column>
        <el-table-column prop="name" label="图片"></el-table-column>
        <el-table-column prop="name" label="物品名"></el-table-column>
        <el-table-column prop="date" label="下单日期"></el-table-column>
        <el-table-column prop="price" label="价格(元)" width="80"></el-table-column>
        <el-table-column prop="address" label="地址" width="200"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
      </div>
    </div>
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
        { name: "我的订单" }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.order-list {
  padding: 0 20px 20px 0px;
}
</style>