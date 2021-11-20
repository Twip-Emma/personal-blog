<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 12:43:18
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 21:49:52
 * @Description: file content
-->
<template>
  <div class="out">
      <div class="item">
        <div class="skill-item">Java+kotlin</div>
        <el-progress color="#D2691E" class="item" :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">Python+None</div>
        <el-progress color="#00BFFF" class="item" :text-inside="true" :stroke-width="24" :percentage="60"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">Ajax+Axios+Fetch</div>
        <el-progress color="#808000" class="item" :text-inside="true" :stroke-width="24" :percentage="60"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">Vue+jQuery</div>
        <el-progress color="#008000" class="item" :text-inside="true" :stroke-width="24" :percentage="75"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">Spring+MyBatis</div>
        <el-progress color="#000000" class="item" :text-inside="true" :stroke-width="24" :percentage="85"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">SpringBoot</div>
        <el-progress color="#228B22" class="item" :text-inside="true" :stroke-width="24" :percentage="70"></el-progress>
      </div><br>
      <div class="item">
        <div class="skill-item">SpringMVC</div>
        <el-progress color="#FFA500" class="item" :text-inside="true" :stroke-width="24" :percentage="30"></el-progress>
      </div><br>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  width: 90%;
  display: flex;
}

.skill-item {
  width: 20%;
  text-align: center;
}
</style>