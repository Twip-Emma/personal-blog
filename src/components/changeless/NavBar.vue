<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 12:11:04
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 16:58:27
 * @Description: file content
-->
<template>
  <div>
    <!-- 顶部导航栏 -->
    <el-menu
      class="el-menu-demo-p"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="el-menu-item_p" index="1" @click="jumpToHome"
        >首页</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="2" @click="jumpToEssay"
        >随笔</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="3" @click="jumpToMessage"
        >留言</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="4" @click="jumpToProject"
        >项目</el-menu-item
      >
      <el-menu-item class="el-menu-item_p" index="5" @click="jumpToAbout"
        >关于</el-menu-item
      >
      <el-menu-item class="el-menu-item_p-input">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="userInput"
        >
        </el-input>
      </el-menu-item>
      <Logined/>
    </el-menu>
  </div>
</template>

<script>
// import {mapActions} from "vuex"
import Logined from '@/components/changeless/Logined'
export default {
  name: "NavBar",
  components:{Logined},
  data() {
    return {

      administrator: true,
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
    jumpToMessage() {
      this.$router.push({
        name: "Message",
        query: {},
      });
    },
    jumpToProject() {
      this.$router.push({
        name: "Project",
        query: {},
      });
    },
    jumpToAbout() {
      this.$router.push({
        name: "About",
        query: {},
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.menu-out {
  width: 70%;
}
.el-menu-demo-p {
  display: flex;
  justify-content: space-around;
}
.el-menu-item_p {
  text-align: center;
  width: 200px;
}
.el-menu-item_p-input {
  width: 400px;
}
</style>