<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 11:41:37
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-19 20:07:24
 * @Description: file content
-->
<template>
  <div class="out">
    <IndexMain/>
  </div>
</template>

<script>
// import Aside from "@/components/homepage/Aside";
// import HomeMain from '@/components/homepage/HomeMain'
import IndexMain from '@/components/index/IndexMain'

export default {
  name: "HomePage",
  components: { IndexMain },
};
</script>

<style scoped>
/* .out{
  width: 1000px;
      display: flex;
  justify-content: center;
  align-items: center;
} */
</style>