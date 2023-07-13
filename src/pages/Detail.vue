<template>
  <div>
    <Header  title="手机详情" />

    <main>
      <!-- 图片盒 -->
      <div class="img-box">
        <img :src='"@/assets/img/P"+id+".png"' width="100%" alt="">
      </div>
      <div class="text-box">
        <div class="name">{{detail.title}}</div>
        <div class="sale">新用户三期免息</div>
        <div class="select">{{detail.otherTitle}}</div>
        <div class="serve">假一赔十，顺丰包邮</div>
      </div>
      
      <div class="btn-box">
        <button type="button" @click="phone">加入购物车</button>
      </div>
    </main>
    <!-- 返回 -->
    <Back />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Back from '@/components/Back'
  import axios from 'axios'

  export default {
    name: "Detail",
    components: {
      Header,
      Back,
      axios
    },
    data() {
      return {
        //接收
        id: this.$route.params.id,
        detail: {
          id: 1  //初始
        }
      }
    },
    methods: {
      fetchDetail(id) {
        axios({
          method: 'post',
          url: '/api/detail',
          data: id //params
        }).then((res) => {
          this.detail = res.data;
        }).catch((err) => {
          
        })
      },
      phone() {
        this.$store.commit("addPhone", this.detail);
        this.$router.push({path: '/Shopping'})
      }
    },
    mounted() {
      this.fetchDetail(this.id);
    }

  }
</script>

<style lang="scss" scoped>
// 图片盒
main {
  text-align: center;

  .img-box {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%
  }
  .text-box {
    margin-top: 20px;
    background-color: white;
    border-radius: 10px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;

    .name {
      font-weight: bold;
      font-size: 20px;
      margin-top: 20px;
    }
    .sale {
      color: red;
      font-size: 13px;
      margin-top: 20px;
    }
    .select {
      font-size: 13px;
      margin-top: 20px;
    }
    .serve {
      color: #999;
      font-size: 13px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  .btn-box {
    padding: 20px;
    text-align: center;
  
    button {
      font-size: 16px;
      color: white;
      border-radius: 10px;
      margin-top: 15px;
      margin-bottom: 40px;
      padding: 10px 60px;
      background: rgb(44, 56, 96);
      outline: none;
    }
  }
}
</style>