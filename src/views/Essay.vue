<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 16:50:58
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 22:11:21
 * @Description: file content
-->
<template>
  <el-container>
    <el-timeline>
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
      essayList: [
        {
          id: "xxxxxx1",
          createTime: "2021-11-17",
          title: "这是标题1",
          content: "文章正文1",
          image: "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
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

<style scoped>
.el-image {
  width: 200px;
}
.el-card {
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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