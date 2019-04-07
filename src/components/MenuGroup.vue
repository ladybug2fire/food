<template>
  <div class="menu-group">
    <div class="left">
      <img class="avatar" src="../assets/img/huaha.png" alt="菜单头图">
    </div>
    <div class="right">菜单名</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.menu-group {
    margin: 10px 0;
    border: 1px solid grey;
  .avatar {
    object-fit: cover;
    width: 100px;
    height: 100px;
  }
  display: flex;
  .right{
      margin-left: 10px;
  }
}
</style>