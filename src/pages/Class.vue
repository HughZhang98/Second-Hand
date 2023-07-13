<template>
  <div class="search-box">
    <HeadSearch />
    
    <main>
      <!-- 左栏 -->
      <LeftBox />
      <!-- 轮播 -->
      <div class="newLunbo">
        <Lunbo />
      </div>
      <!-- 品牌 -->
      <div class="board">
        <p>手机品牌</p>
        <img src="@/assets/img/phones.png" width="92%" alt="">
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
  import HeadSearch from '@/components/HeadSearch'
  import Footer from '@/components/Footer'
  import Lunbo from '@/components/Lunbo'
  import LeftBox from '@/components/LeftBox'

  export default {
    name: "Class",
    components: {
      HeadSearch,
      Footer,
      Lunbo,
      LeftBox
    },  
  }
</script>

<style lang="scss" scoped>
.search-box {
  text-align: center;
  
  //轮播
  .newLunbo {
    width: 70%;
    padding-left: 25%;
    padding-top: 5%;
  }
  //品牌
  .board {
    width: 70%;
    margin-left: 25%;
    margin-top: 10%;
    background-color: white;
    border-radius: 10px;
    padding-bottom: 10px;
    p {
      font-size: 20px;
      padding: 10px 0px 20px 0px;
    }

  }
}
</style>