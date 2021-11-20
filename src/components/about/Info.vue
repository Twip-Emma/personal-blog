<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 13:35:03
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 14:10:10
 * @Description: file content
-->
<template>
  <div>
    <!-- <el-radio-group v-model="size">
    <el-radio label="">默认</el-radio>
    <el-radio label="medium">中等</el-radio>
    <el-radio label="small">小型</el-radio>
    <el-radio label="mini">超小</el-radio>
  </el-radio-group> -->

    <el-descriptions
      class="margin-top"
      title=""
      :column="3"
      :size="size"
      border
    >
      <!-- <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        七画一只妖
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        999999999999999
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        提瓦特大陆璃月国
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          联系地址
        </template>
        璃月港往生堂
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "mini",
    };
  },
};
</script>