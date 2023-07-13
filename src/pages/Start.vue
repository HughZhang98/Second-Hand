<template>
  <div>
    <img class="start-img" :class="{'hide': hideYou}" src="@/assets/img/Start.png" alt="">
  </div>
</template>

<script>

export default {
  name: "Start",
  data () {
    return {
      hideYou: false,
    }
  },
  //时间和跳转
  mounted () {
    setTimeout(() => {
      this.hideYou = true
    }, 1200)
    setTimeout(() => {
      this.$router.push('/Home')
    }, 1700)
  },
}
</script>

<style lang="scss" scoped>
  .start-img {
    width: 100%;
  }
  .start-img {
    transition: all ease-in-out .35s;
  }
  .hide {
    opacity: 0;
  }
</style>