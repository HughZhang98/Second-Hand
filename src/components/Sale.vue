<template>
  <div class="sale">
    <!-- 标题 -->
    <div class="title">
      <p>{{saleTitle}}</p>
      <p>{{saleEngTitle}}</p>
    </div>
    <!-- 物品 -->
    <div class="sale-box">
      <router-link class="goods" v-for="(phone, index) in phones" :to="'/Detail/'+phone.id" tag="div" :key="index">
        <img :src='"@/assets/img/P"+phone.id+".png"' alt="photo">
        <p>{{phone.name}}</p>
        <b>￥{{phone.price}}</b>
        <s>{{phone.oldPrice}}</s>
      </router-link>
    </div>
  </div>
</template>
  
<script>
  import axios from 'axios'

  export default {
    name: "Sale",
    props: {
      saleTitle: {
        type: String,
        required:true      
      },
      saleEngTitle: {
        type: String,
        required:true      
      }, 
    },
    components: {
      axios
    },
    data() {
      return {
        phones:[]
      }
    },
    methods: {
      //get请求
      fetchData() {
        axios.get('/api/Shopping').then((res) => {
          // console.log(res);
          this.phones = res.data
        })
      }
    },
    mounted() {
      this.fetchData();
    }
  }
</script>

<style lang="scss" scoped>
  // 标题
  .title {
      :first-child {
        font-weight: bold;
        font-size: 25px;
      }
      font-size: 20px;
      background-color: white;
      padding: 5px 0px;
      margin-top: 5px;
    }
  // 物品
  .sale-box {
    display: flex;
    justify-content: space-around;

    .goods {
      margin: 10px 0px 5px 0px;
      padding: 10px;
      background-color: white;

      img {
        width: 65%;
      }
      b {
        color: red;
        font-size: 18px;
      }
      s {
        color: #999;
        font-size: 13px;
      }
    }
  }
</style>