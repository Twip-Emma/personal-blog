<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 14:39:09
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 21:23:34
 * @Description: file content
-->
<template>
  <div class="block">
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      value1:""
    }
  },
};
</script>

<style scoped>
.block{
  /* height: 100px; */
  background-color: red;
}
.el-date-picker{
  padding: 0;
}
</style>