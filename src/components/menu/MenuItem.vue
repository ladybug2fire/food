<template>
  <div class="menu-item" @mouseover="hoverable=true" @mouseleave="hoverable=false">
    {{title}}
    <div class="detail-items" v-show="hoverable"></div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      hoverable: false
    };
  }
};
</script>
<style lang="less">
  @import url('./index.less');
</style>