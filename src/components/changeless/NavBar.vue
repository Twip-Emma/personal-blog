<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 12:11:04
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 16:03:27
 * @Description: file content
-->
<template>
  <div>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="jumpToHome">首页</el-menu-item>
      <el-menu-item index="2" @click="jumpToEssay">随笔</el-menu-item>
      <el-menu-item index="3" @click="jumpToHome">占位3</el-menu-item>
      <el-menu-item index="4" @click="jumpToHome">占位4</el-menu-item>
      <el-menu-item index="5" @click="jumpToHome">占位5</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import {mapActions} from "vuex"
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    jumpToHome() {
      this.$router.push({
        name: "HomePage",
        query: {},
      });
    },
    jumpToEssay() {
      this.$router.push({
        name: "Essay",
        query: {},
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
</style>