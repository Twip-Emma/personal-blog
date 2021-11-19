<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 18:05:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-19 19:08:18
 * @Description: file content
-->
<template>
  <el-menu-item>
    <div v-if="logined" style="margin-right: 50px">
      <el-button size="mini" effect="light" type="primary" @click="goToLogin"
        >登录</el-button
      >
      <el-button size="mini" effect="light" type="warning">注册</el-button>
    </div>
    <div v-else class="loginInfo">
      <el-avatar :src="userInfo.avatar"></el-avatar>
      <div class="user-option">
        <h3 class="web-font nickname">{{ userInfo.nickname }}</h3>
        <p v-if="administrator" class="logout">管理博客</p>
        <p class="logout">退出登录</p>
      </div>
    </div>
  </el-menu-item>
</template>

<script>
export default {
  data() {
    return {
      administrator: true,
      // userInfo: {
      //   nickname: "七画一只妖",
      //   avatar:
      //     "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
      // },
      userInfo: null,
      logined: true,
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({
        name: "Login",
        query: {},
      });
    },
  },
};
</script>

<style scoped>
.title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 120vh;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 3px solid #fff;
}
.el-header {
  transition: 0.2s;
}
.el-header:hover {
  opacity: 1 !important;
}
.el-menu {
  background-color: rgba(0, 0, 0, 0) !important;
}
.el-menu /deep/ .el-menu-item {
  background-color: rgba(0, 0, 0, 0) !important;
}
.el-menu /deep/ .el-menu-item:hover i {
  color: white;
}
.el-menu /deep/ .el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
.search_input {
  position: relative;
  box-sizing: border-box;
}
.search_input ul {
  position: absolute;
  top: 30px;
  width: 100%;
  border: 1px solid #e5e9ef;
  margin-top: 1px;
  background: #fff;
  z-index: 10000;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(58, 118, 142, 0.16);
  padding: 10px 0;
  font-size: 14px;
  box-sizing: border-box;
}
.search_input ul li {
  padding: 0 16px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  word-wrap: break-word;
  word-break: break-all;
  display: block;
  color: #222;
  position: relative; /*transition: .2 ease;*/
}
.search_input ul li:hover {
  background-color: #e8f3ff;
}
.search-blog {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  padding-right: 20px;
}
.el-header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}
.el-header > div {
  display: flex;
  align-items: center;
}
.el-header img {
  height: 40px;
}
.el-header span {
  margin-left: 15px;
}
.el-header button {
  opacity: 0.8;
}
.el-header .el-menu {
  flex-shrink: 0;
}
.el-header .logo {
  color: #ffd04b;
}
.el-header .logo:hover {
  cursor: pointer;
}
.loginInfo {
  flex-shrink: 0;
  /*background-color: #545c64;*/
  color: white;
  height: 60px;
  border: none;
  width: 160px;
  position: relative;
}
.loginInfo .el-avatar {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  z-index: 200;
}
.loginInfo .user-option {
  position: absolute;
  top: 60px;
  width: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: gray;
  visibility: hidden;
  opacity: 0;
  color: #333;
  border: 1px solid #eee;
  border-radius: 5px;
}
.loginInfo .logout {
  margin: 10px auto;
  padding: 0;
  width: 100%;
}
.loginInfo .logout:hover {
  background-color: #eee;
}
/* .loginInfo:hover {
  cursor: pointer;
}
.loginInfo:hover .el-avatar {
  transform: translate(0, 50%) scale(1.5);
  transition: .3s;
} */
.loginInfo:hover .user-option {
  z-index: 10;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.4s;
}
.zZindex {
  margin-top: 300px;
  padding-top: 100px;
}
.menu-expend {
  display: none !important;
}
.el-menu-hidden {
  /*display: none;*/
  position: absolute;
  top: 60px;
  left: 0;
  border-top: 1px solid #ccc;
  border-right: none;
  width: 100%;
}
.el-menu-hidden .el-menu-item {
  border-bottom: 1px solid #ccc;
}
@media screen and (max-width: 1000px) {
  .search_input {
    visibility: hidden;
  }
}
@media screen and (max-width: 768px) {
  .el-menu /deep/ .el-menu-item {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
  .el-menu-demo {
    display: none;
  }
  .title {
    width: 100%;
    background-position-x: center;
  }
  .menu-expend {
    display: block !important;
    position: fixed;
    top: 18px;
    left: 150px;
  }
  .menu-expend:hover {
    color: #ffd04b;
    cursor: pointer;
  }
  .title {
    background-position-y: 0;
  }
}
</style>