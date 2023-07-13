<template>
  <div id="back">
    <router-link to="/Home">
      <p>返回首页</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Back"
  }
</script>

<style lang="scss" scoped>
#back {
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 55px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(44, 56, 96);
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  text-align: center;

  p {
    font-size: 16px;
    color: white;
    padding: 3px;
  }
}
</style>