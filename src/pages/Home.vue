<template>
  <div>
      <div class="slide-container">
        <slide />
      </div>
      <div class="card-container">
        <h2 class="section-title">新秀菜谱</h2>
        <food />
      </div>
  </div>
</template>

<script>
import MainHeader from '@/components/Header.vue'
import Slide from '@/components/Slide.vue'
import Food from '@/components/Food.vue'

  export default {
    components:{
      MainHeader,
      Slide,
      Food,
    }
  }
</script>

<style lang="less" scoped>
.card-container{
    .section-title{
        color: #c0ae7d;
    }
}
.slide-container{
    margin-top: 10px;
    padding: 0 20px;
}
</style>