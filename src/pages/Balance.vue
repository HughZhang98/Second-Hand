<template>
  <div class="balance-box">
    <div class="text-box">{{text}}</div>
    <div class="img-box">
      <img src="@/assets/img/alipay.jpg" width="100%" alt="">
    </div>
  </div>
</template>

<script>

  export default {
    name: "Balance",
    data() {
      return {
        text: "请使用支付宝扫码支付",
      }
    },
    mounted() {
      // 弹框时间
      setTimeout(() => {
        if(window.confirm("亲是否支付完成？")) {
          alert("支付成功！");
          this.$router.push({path: "Home"})
        } else {
          this.$router.push({path: "Home"})
        }
      }, 3000);
    }
  }
</script>

<style lang="scss" scoped>
.balance-box {
  text-align: center;

  .text-box {
    font-size: 20px;
    margin-top: 30%
  }
  .img-box {
    width: 50%;
    margin-top: 20%;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>