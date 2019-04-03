<template>
  <div class="main-menu">
    <div class="menu-items">
      <div class="menu-item">首页</div>
      <div class="menu-item active" @mouseover="hoverable=true" @mouseout="hoverable=false">饮食健康</div>
      <div class="menu-item" @mouseover="hoverable=true" @mouseout="hoverable=false">美食菜单</div>
    </div>
    <div class="detail-items" v-show="hoverable"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoverable: false
    };
  }
};
</script>

<style lang="less">
@height: 76px;
@bg-color: #fafafa;
.main-menu {
  height: @height;
  padding: 0 10vw;
  background-color: #fff;
  box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.3);
  .menu-items {
    display: flex;
    align-items: center;
    font-weight: bold;
    height: 100%;
    .menu-item {
      position: relative;
      height: 100%;
      line-height: @height;
      padding: 0 20px;
      &:not(:hover):not(:first-of-type):after {
        position: absolute;
        right: 0;
        content: "\25BC";
        color: grey;
      }
      &:hover {
        background-color: @bg-color;
      }
      &.active {
        &:before {
          content: "";
          display: block;
          height: 0;
          position: absolute;
          width: calc(100% - 40px);
          border-bottom: 4px solid #ff3232;
          margin-top: -4px;
          bottom: 0;
        }
      }
    }
  }
  .detail-items {
    height: 282px;
    padding: 20px;
    box-sizing: border-box;
    background-color: @bg-color;
    border: 1px solid @bg-color;
  }
}
</style>