<template>
  <div class="food-header">
        <el-input class="search-input" placeholder="请输入菜谱/食材/菜单/作者">
          <template slot="append">搜索</template>
        </el-input>
        <div class="login-section">
            <div>登入</div>
            <div>注册</div>
        </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.food-header {
  height: 129px;
  width: 100%;
  background-color: #b4010f;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .search-input{
    width: 430px;
    height: 36px;
    box-sizing: border-box;
    .el-input-group__append {
        color: white !important;
        width: 80px;
        background-color: #b4010f !important;
    }
  }
  .login-section{
      margin-left: 100px;
      color: white;
      display: flex;
      div{
          height: 28px;
          line-height: 28px;
          font-size: 12px;
          margin: 0 5px;
          border-radius: 4px;
          padding: 0 10px;
          &:hover{
              background: rgba(0,0,0,0.3);
          }
      }
  }
}
</style>