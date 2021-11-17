<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:41:37
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 21:26:51
 * @Description: file content
-->
<template>
  <div>
    <el-container>
      <!-- <h1>这是HomePage组件</h1> -->
      <el-aside width="200px" class="marrgin"><Aside /></el-aside>
      <el-main class="marrgin"><HomeMain/></el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from "@/components/homepage/Aside";
import HomeMain from '@/components/homepage/HomeMain'

export default {
  name: "HomePage",
  components: { Aside,HomeMain },
};
</script>

<style>
.marrgin{
  margin: 10px;
}
</style>