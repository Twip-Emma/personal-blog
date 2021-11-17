<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 14:39:09
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 20:51:24
 * @Description: file content
-->
<template>
  <div>
    <Calendar />
    <Sort />
    <Label />
  </div>
</template>

<script>
import Sort from "@/components/homepage/Sort";
import Label from "@/components/homepage/Label";
import Calendar from "@/components/homepage/Calendar";
export default {
  name: "Aside",
  components: {
    Sort,
    Label,
    Calendar,
  },
};
</script>

<style>
</style>