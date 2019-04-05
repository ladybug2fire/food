<template>
  <div>
      <main-menu></main-menu>
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
import MainMenu from '@/components/MainMenu.vue'
import Slide from '@/components/Slide.vue'
import Food from '@/components/Food.vue'

  export default {
    components:{
      MainHeader,
      MainMenu,
      Slide,
      Food,
    }
  }
</script>

<style lang="less" scoped>
.card-container{
    padding: 0 10px;
    .section-title{
        color: #c0ae7d;
    }
}
.slide-container{
    margin-top: 10px;
    padding: 0 20px;
}
</style>