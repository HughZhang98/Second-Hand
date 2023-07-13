<template>
  <div class="left-box">
    <ul>
      <router-link to="" tag="li">iPhone</router-link>
      <router-link to="" tag="li">安卓</router-link>
      <router-link to="" tag="li">智能手表</router-link>
      <router-link to="" tag="li">平板</router-link>
      <router-link to="" tag="li">笔记本</router-link>
      <router-link to="" tag="li">配件</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "LeftBox",
  }
</script>

<style lang="scss" scoped>
//左栏
  .left-box {
    position: fixed;
    top: 55px;
    left: 0px;
    right: 330px;
    background-color: white;
    height: 100%;
    width: 20%;

    li {
      padding: 20px 0px;
    }
    li:hover {
      background-color: rgb(240, 240, 240);
    }
  }
</style>