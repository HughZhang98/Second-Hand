<template>
  <div class="my-box">
    <Header title="登录"/>

    <main>
      <!-- 头像 -->
      <div class="headimg">
        <img src="@/assets/img/head.jpg" width="100%" alt="">
      </div>
      <!-- 输入 -->
      <div class="input-box">
        <div class="user-box">
          <div class="user-img">
            <img src="@/assets/img/user.png" alt="">
          </div>
          <input type="text" placeholder="用户名" v-model="username">
        </div>
        <hr>
        <div class="password-box">
          <div class="password-img">
            <img src="@/assets/img/password.png" alt="">
          </div>
          <input type="password" id="" placeholder="密码" v-model="password">
        </div>
      </div>
      <!-- 登录 -->
      <button type="submit" @click="login">{{subit}}</button>
      <!-- 其他登录 -->
      <div class="other">
        <p>{{other}}</p>
        <div class="img-box">
          <img src="@/assets/img/weibo.png" @click="nothing" alt="">
          <img src="@/assets/img/qq.png" @click="nothing" alt="">
          <img src="@/assets/img/wechat.png" @click="nothing" alt="">
        </div>
      </div>
      <!-- 返回 -->
      <Back />
    </main>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Back from '@/components/Back'

  export default {
    name: "My",
    components: {
      Header,
      Back
    },
    data() {
      return {
        subit: "登录",
        other: "使用社交帐号登录",
        username: "",
        password: "",
        back: "返回首页 >>"
      }
    },
    methods: {
      //登录
      login() {
        if (this.username != "" && this.password != "") {
          alert("欢迎" + this.username);
          this.$router.push({path: "Home"});
        } else {
          alert("请输入正确的用户名和密码")
        }
      },
      //没写其他账号登录
      nothing() {
        alert("2333并没有写");
      },
    }
  }
</script>

<style lang="scss" scoped>
.my-box {
  text-align: center;

  .headimg {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100px;
    height: 100px;
    border: 1px solid black;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  }
  input {
    width: 280px;
    height: 75px;
    outline: none;
    font-size: 16px;
    border: none;
    padding-left: 20px;
  }
  .input-box {
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    width: 285px;
    height: 155px;
    border-radius: 10px;
    border: 1px solid #666;

      .user-box {
        width: 280px;
        display: flex;
        align-items: center;

          .user-img {
            padding: 20px;
          }
      }
      .password-box {
        width: 280px;
        display: flex;
        align-items: center;

          .password-img {
            padding: 20px;
          }
      }
  }
  button {
    width: 200px;
    height: 40px;
    background: rgb(44, 56, 96);
    border-radius: 10px;
    border: none;
    font-size: 16px;
    color: white;
    margin: 35px;
    outline: none;
  }
  .other {
    padding-bottom: 50px;

    p {
      font-size: 15px;
      padding: 5%;
    }
    img {
      width: 50px;
      padding: 20px;
    }
  }
}
</style>