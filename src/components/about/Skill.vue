<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 12:43:18
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 13:28:17
 * @Description: file content
-->
<template>
  <div class="out">
      <div class="item">
        <div class="skill-item">Java</div>
        <el-progress class="item" :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">Java</div>
        <el-progress class="item" :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 10,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  display: flex;
}

.skill-item {
  width: 20%;
  text-align: center;
}
</style>