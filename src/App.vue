<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 10:27:10
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 15:25:57
 * @Description: file content
-->
<template>
  <div id="app">
    <el-container>
      <el-header><NavBar/></el-header>
      <!-- 这里应该动态展示 -->
      <!-- <HomePage/> -->
      <router-view></router-view>
      <el-footer><Footer/></el-footer>
    </el-container>
  </div>
</template>

<script>
// import HomePage from "@/views/HomePage";
import NavBar from '@/components/changeless/NavBar'
import Footer from '@/components/changeless/Footer'
export default {
  name: "App",
  components: {
    NavBar,Footer
  },
};
</script>

<style>
.el-header,
.el-footer {
  /* background-color: #b3c0d1; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

/* .el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
} */
</style>
