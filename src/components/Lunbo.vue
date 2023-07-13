<template>
  <div id="swiper-box">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide>
        <img width="100%" src="@/assets/img/L1.png" alt="">
      </swiperSlide>
      <swiperSlide>
        <img width="100%" src="@/assets/img/L2.png" alt="">
      </swiperSlide>
      <swiperSlide>
        <img width="100%" src="@/assets/img/L3.png" alt="">
      </swiperSlide>
      <!-- 分页 -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  
  export default {
    name: "Lunbo",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          // 自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: true,
            disableOnInteraction: false,
          },
          //分页
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          //循环
          loop:true,
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>