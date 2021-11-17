<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 12:11:04
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 20:57:30
 * @Description: file content
-->
<template>
  <div>
    <div class="line"></div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="el-menu-item" index="1" @click="jumpToHome"
        >首页</el-menu-item
      >
      <el-menu-item class="el-menu-item" index="2" @click="jumpToEssay"
        >随笔</el-menu-item
      >
      <el-menu-item class="el-menu-item" index="3" @click="jumpToHome"
        >留言</el-menu-item
      >
      <el-menu-item class="el-menu-item" index="4" @click="jumpToHome"
        >占位4</el-menu-item
      >
      <el-menu-item class="el-menu-item" index="5" @click="jumpToHome"
        >占位5</el-menu-item
      >
      <el-menu-item class="el-menu-item-input">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="userInput"
        >
        </el-input>
      </el-menu-item>
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
      userInput: "",
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
.menu-out {
  width: 70%;
}
.el-menu-demo {
  display: flex;
  justify-content: space-around;
}
.el-menu-item {
  text-align: center;
  width: 200px;
}
.el-menu-item-input {
  width: 400px;
}
</style>