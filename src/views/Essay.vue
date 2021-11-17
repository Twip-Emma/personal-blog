<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 16:50:58
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-17 18:52:46
 * @Description: file content
-->
<template>
  <el-container>
    <el-timeline class="animate__animated animate__fadeInLeft">
      <el-timeline-item
        :color="essay.borderColor"
        v-for="essay in essayList"
        :key="essay.id"
        :timestamp="essay.createTime"
        placement="top"
      >
        <el-card>
          <h2 v-if="essay.title">{{ essay.title }}</h2>
          <div class="typo" v-html="essay.content"></div>
          <el-image v-if="essay.image" :src="essay.image"></el-image>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-container>
</template>

<script>
export default {
  name: "Essay",
  data() {
    return {
      essay: {
        id: "xxxxxx",
        createTime: "2021-11-17",
        title: "这是标题",
        content: "文章正文",
        image: "图片链接，可有可无",
      },
      essayList: [
        {
          id: "xxxxxx1",
          createTime: "2021-11-17",
          title: "这是标题1",
          content: "文章正文1",
          image: "",
        },
        {
          id: "xxxxxx2",
          createTime: "2021-11-06",
          title: "这是标题2",
          content: "文章正文2",
          image: "",
        },
        {
          id: "xxxxxx3",
          createTime: "2021-11-01",
          title: "标题3",
          content: "oh,boy next door",
          image: "",
        }
      ],
    };
  },
  created() {
    // this.getEssayList();
  },
  methods: {
    // async getEssayList() {
    //     this.essayList = this.essayListTest.sort();
    // }
  },
  mounted() {},
};
</script>

<style>
.el-image {
  width: 200px;
}
.el-card {
  border-radius: 20px;
  box-shadow: 0 0 15px 5px white;
}

.el-timeline {
  font: 16px/1.5 "Microsoft Yahei", "PingFang SC", "Hiragino Sans GB",
    sans-serif !important;

  width: 80%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .el-timeline {
    width: 98%;
    padding: 2px;
  }

  .el-timeline /deep/ .el-timeline-item__wrapper {
    padding-left: 15px !important;
  }
}
</style>