<template>
  <div>
    <Header title="我的购物车"/>

    <main>
    <div class="shop-box">  
      <!-- item盒子 -->
      <div class="item-box" v-for="(phone, index) in phones" :key="index">
        <!-- 图片链接 -->
        <router-link  :to="'/Detail/'+phone.id" tag="div">
          <img :src='"@/assets/img/P"+phone.id+".png"' alt="photo">
        </router-link> 
        <!-- 文本盒子 -->
        <div class="text-box">
          <!-- 标题 -->
          <div class="title">
            <b>{{phone.title}}</b>
            <p>{{phone.otherTitle}}</p>
          </div>
          <!-- 价格和数量 -->
          <div class="price-box">￥{{phone.price}}
            <div class="num-box">
              <button @click="plus(index)">+</button>
              {{phone.num}}
              <button @click="reduce(index)">-</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部盒子 -->
      <div class="bottom-box">
        <p>
          合计:<span>￥{{money}}</span>
        </p>
        <div class="balance-box" @click="next">结算</div>
      </div>
    </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'

  import axios from 'axios'

  export default {
    name: 'Shopping',
    components: {
      Header,
      Footer,
      axios
    },
    data() {
      return {
        phones:[]
      }
    },
    computed: {
      // 合计
      money() {
        var sum = 0;
        for(let i = 0; i < this.phones.length; i++){
          let phone = this.phones[i];
          sum += phone.price * phone.num;
        }
        return sum;
      }
    },
    methods: {
      // 加
      plus(index) {
        this.phones[index].num++;
      },
      // 减
      reduce(index) {
        if(this.phones[index].num == 1) {
          if (window.confirm("不能减少了，确认删除吗?")) {
            this.phones.splice(index,1);
          }
        } else {
          this.phones[index].num--;
        }
      },
      //结算跳转
      next() {
        if (this.phones.length === 0) {
          alert("购物车为空！");
        } else {
          this.$router.push({path: "Balance"});
        }
      },
    },
    mounted() {
      this.phones = this.$store.state.phoneList
    }
  }
</script>

<style lang="scss" scoped>
.shop-box {
  border-top: 1px solid #999;
  // item盒子
  .item-box {
    border-bottom: 1px solid #999;
    display: flex;
    padding: 10px;

    img {
      width: 80px;
      height: 80px;
    }
    // 文本盒子
    .text-box {
      padding: 0px 10px;
      flex-grow: 1;

      .title {
        b {
          font-size: 18px;
        }
        p {
          line-height: 30px;
          font-size: 10px;
          color: #999;
        }
      }
      // 价格和数量
      .price-box {
        height: 30px;
        line-height: 30px;
        font-size: 18px;
        color: red;
        display: flex;
        justify-content: space-between;

        .num-box {
          color: rgb(44, 56, 96);

          button {
            width: 20px;
            height: 20px;
            background: rgb(44, 56, 96);
            color: white;
            border: 1px solid;
            border-radius: 10px;
            outline: none;
          }
        }
      }
    }
  }
    // 底部盒子
    .bottom-box {
      background-color: rgb(230, 230, 230);
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0px;
      height: 125px;
      display: flex;
      justify-content: space-between;

      p {
        font-size: 16px;
        line-height: 55px;
        span {
          color: red;
          font-size: 20px;
        }
      }

      .balance-box {
        background-color: red;
        color: white;
        font-weight: bold;
        font-size: 20px;
        width: 35%;
        text-align: center;        
        line-height: 55px;
      }

    }
}
</style>