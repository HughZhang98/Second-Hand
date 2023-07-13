<template>
<div id="header">
  <input type="text" placeholder="搜索你想要的机型/产品" v-model="product">
    <img src="@/assets/img/my.png" alt="" @click="toMy">
    <img src="@/assets/img/search.png" alt="" @click="search" @keyup.enter="search">
</div>
</template>

<script>
  export default {
    name: "HeadSearch",
    data() {
      return {
        product:''
      }
    },
    methods: {
      toMy() {
         this.$router.push({path: "My"});
      },
      search() {
        if (this.product != "") {
          this.$router.push({path: "Class"});
        } else {
          alert("请正确输入");
        }
      }
    },
  }

</script>

<style lang="scss" scoped>
  #header {
    height: 55px;
    line-height: 55px;
    background-color: rgb(44, 56, 96);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    :last-child {
      width: 20px;
      position: absolute;
      top: 18px;
      right: 55px;
    }
    img {
      flex-grow: 1;
      padding-right: 15px;
    }
    input {
      width: 80%;
      color: #666;
      outline: none;
      border: 1px solid white;
      border-radius: 5px;
      padding: 5px;
      margin: 15px;
    }    
  }

</style>