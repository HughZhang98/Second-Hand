<template>
  <div id="header">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required:true      
      }
    }
  }
</script>

<style lang="scss" scoped>
#header {
    height: 55px;
    line-height: 55px;
    background-color: rgb(44, 56, 96);
    color: white;
    font-size: 20px;
    text-align: center;
  }
</style>