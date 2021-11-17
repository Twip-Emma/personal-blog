<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 15:02:20
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 16:48:34
 * @Description: file content
-->
<template>
  <div class="essay_main"><EssayItem /><EssayItem /><EssayItem /></div>
</template>

<script>
import EssayItem from "@/components/essay/EssayItem";
export default {
  name: "EssayMain",
  components: {
    EssayItem,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.essay_main {
  display: flex;
  justify-content: space-around;
}
</style>