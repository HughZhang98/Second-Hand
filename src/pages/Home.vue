<template>
  <div class="home-box">
    <HeadSearch />

    <main>
      <!-- 顶部图标 -->
      <SlideImg />
      <!-- 轮播图 -->
      <Lunbo />
      <!-- 抢购 -->
      <Sale saleTitle="限时抢购" saleEngTitle="Last Minute" />
      <!-- 秒杀 -->
      <Seckill seckillTitle="限时秒杀" seckillEngTitle="Seckill" />
    </main>

    <Footer />
  </div>
</template>

<script>
  import HeadSearch from '@/components/HeadSearch'
  import Footer from '@/components/Footer'
  import SlideImg from '@/components/SlideImg'
  import Lunbo from '@/components/Lunbo'
  import Sale from '@/components/Sale'
  import Seckill from '@/components/Seckill'


  export default {
    name: 'Home',
    components: {
      HeadSearch,
      Footer,
      SlideImg,
      Lunbo,
      Sale,
      Seckill
    },
  }
</script>

<style lang="scss" scoped>
  .home-box {
    text-align: center;
  }
</style>