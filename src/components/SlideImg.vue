<template>
  <div class="swiper-box">
    <!-- 滑动图标 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiperSlide class="swiperSlide-box">
        <div class="btn-box" v-for="(top, index) in topItems" :key="index">
          <img :src="top.img" alt="">
          <p>{{top.name}}</p>
        </div>
      </swiperSlide>
      <swiperSlide class="swiperSlide-box">
        <div class="btn-box" v-for="(top, index) in topItems" :key="index">
          <img :src="top.img" alt="">
          <p>{{top.name}}</p>
        </div>
      </swiperSlide>
      <!-- 滚动条 -->
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from "vue-awesome-swiper"


  export default {
    name: "SlideImg",
    components: {
      swiper,
      swiperSlide,
    },
    data() {
      return {
        //顶部图标
        topItems: [
          {
            img: require('@/assets/img/T1.png'),
            name: "苹果"
          },
          {
            img: require('@/assets/img/T2.png'),
            name: "安卓"
          },
          {
            img: require('@/assets/img/T3.png'),
            name: "智能手表"
          },
          {
            img: require('@/assets/img/T4.png'),
            name: "平板"
          },
        ],
        swiperOption: {
          scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 25,
          },
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
// 顶部图标
  .swiper-box {
    background: linear-gradient(rgb(44, 56, 96), rgb(110, 149, 192));

    .swiperSlide-box {
      height: 130px;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .btn-box {
        height: 70px;
        width: 70px;
        border: 1px solid white;
        border-radius: 10px;
        background-color: white;

        img {
          width: 35%;
          padding: 5px;
        }
      }
    }
    //滚动条
    .swiper-scrollbar {
      width: 50px;
      margin-left: 43%;
    }
  }
</style>