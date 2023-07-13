<template>
  <div id="footer">
    <router-link v-for="(item, index) in items" :key="index" :to="item.itemTo">
      <img :src="item.img" alt="">
      <p>{{item.word}}</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        items: [
          {
            itemTo:"/Home",
            img: require('@/assets/img/home.png'),
            word: '首页'
          },
          {
            itemTo:"/Class",
            img: require('@/assets/img/class.png'),
            word: '分类'
          },
          {
            itemTo:"/Shopping",
            img: require('@/assets/img/shopping.png'),
            word: '购物车'
          },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
#footer {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 68px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  text-align: center;

  p {
    font-size: 16px;
    color: #999;
    padding: 3px;
  };
  img {
    width: 60%;
  }
}
</style>