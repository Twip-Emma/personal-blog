<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-18 20:59:53
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-19 20:04:59
 * @Description: file content
-->
<template>
<div>
  <el-container>
    <el-row :gutter="12">
      <!-- 博客列表容器 -->
      <el-col :xs="24" :sm="17">
        <el-card
          style="background-color: rgba(255, 255, 255, 0.9)"
          class="left-item"
        >
          <!-- 顶栏：显示博客总篇数 -->
          <div slot="header" class="total">
            <div class="title">
              <i
                v-if="selected"
                class="el-icon-back"
                @click="updateBlogList"
              ></i>
              <span>全部博客</span>
            </div>
            <span
              >共
              <span style="color: #3a8ee6; font-size: 20px">{{
                totalcount
              }}</span>
              篇</span
            >
          </div>

          <!-- 显示每一篇博客 -->
          <el-row
            type="flex"
            align="middle"
            style="flex-wrap: wrap"
            :gutter="20"
            v-for="blog in blogList"
            :key="blog.id"
            shadow="never"
            class="blog-content"
          >
            <el-col class="img" :xs="24" :sm="8">
              <el-image lazy :src="blog.firstPicture"></el-image>
            </el-col>
            <el-col :xs="24" :sm="16">
              <div @click="getBlogInfo(blog.id)">
                <h3>{{ blog.title }}</h3>
                <p class="description">{{ blog.description }}</p>
                <div class="blog-info">
                  <div class="user-info">
                    <el-avatar size="small" :src="blog.user.avatar"></el-avatar>
                    <a href="#" class="header">{{ blog.user.nickname }}</a>
                  </div>
                  <div class="blog-date">
                    <i class="el-icon-date"></i>
                    <span>{{ blog.createTime}}</span>
                  </div>
                  <div>
                    <i class="el-icon-view"></i>
                    <span>{{ blog.views }}</span>
                  </div>
                  <div class="blog-type">
                    <el-tag effect="plain">{{ blog.type.name }}</el-tag>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <!-- 分页 -->
        <el-pagination
          background
          :page-size="queryInfo.pagesize"
          :current-page="queryInfo.pagenum"
          :total="totalcount"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </el-container>
</div>
</template>

<script>
// import Avatar from "@/components/index/Avatar";
export default {
  data() {
    return {
      totalcount: 9999,
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 8,
      },
      intro: "",
      blogList: [
        {
          id: 449,
          title: "博客名称1",
          content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
          firstPicture:
            "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
          flag: "原创",
          views: 99999,
          appreciation: 0,
          createTime: "这里写创建时间",
          updateTime: "这里是更新时间",
          description: "这是简介",
          type: {
            id: 1,
            name: "主要技术栈",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            color: "#59c9fb",
          },
          tags: [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "css" },
            { id: 3, name: "html" },
          ],
          user: {
            id: 1,
            nickname: "七画一只妖",
            avatar:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
            type: "1",
          },
          comments: null,
          tagIds: null,
        },
        {
          id: 450,
          title: "博客名称1",
          content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
          firstPicture:
            "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
          flag: "原创",
          views: 99999,
          appreciation: 0,
          createTime: "这里写创建时间",
          updateTime: "这里是更新时间",
          description: "这是简介",
          type: {
            id: 1,
            name: "主要技术栈",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            color: "#59c9fb",
          },
          tags: [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "css" },
            { id: 3, name: "html" },
          ],
          user: {
            id: 1,
            nickname: "七画一只妖",
            avatar:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
            type: "1",
          },
          comments: null,
          tagIds: null,
        },
        {
          id: 451,
          title: "博客名称1",
          content: "测试测试测试测试测试测试测试测试测试测试测试测试测试v",
          firstPicture:
            "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
          flag: "原创",
          views: 99999,
          appreciation: 0,
          createTime: "这里写创建时间",
          updateTime: "这里是更新时间",
          description: "这是简介",
          type: {
            id: 1,
            name: "主要技术栈",
            pic_url:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
            color: "#59c9fb",
          },
          tags: [
            { id: 1, name: "JavaScript" },
            { id: 2, name: "css" },
            { id: 3, name: "html" },
          ],
          user: {
            id: 1,
            nickname: "七画一只妖",
            avatar:
              "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
            type: "1",
          },
          comments: null,
          tagIds: null,
        },
      ],
      //   判断用户是否进入某一个博客内
      selected: false,
    };
  },
};
</script>

<style scoped>
/* .out{
  width: 1000px;
    display: flex;
  justify-content: center;
  align-items: center;
} */

body {
  width: 100%;
}
.welcome {
  background-color: rgba(0, 0, 0, 0.1);
  border: none;
  height: 90%;
  position: relative;
}
.welcome .border {
  width: 812px;
  height: 112px;
  position: absolute;
  top: -6px;
  left: -6px;
  border: 3px solid white;
  box-sizing: border-box;
  animation: clipMe 5s linear infinite;
}
.welcome .tit {
  box-sizing: border-box;
  position: relative;
  width: 800px;
  height: 100px;
  line-height: 100px;
  box-shadow: inset 0 0 0 1px white;
  margin: 40px auto;
  margin-top: 80px;
  color: white;
  text-align: center;
  font-size: 50px;
  font-weight: normal;
  letter-spacing: 10px;
}
.welcome .intro {
  letter-spacing: 5px;
  line-height: 50px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  color: white;
}
.welcome .down {
  animation: bounce 2s infinite;
  animation-duration: 3s;
  font-size: 25px;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
}
.welcome .down:hover {
  animation: none;
  cursor: pointer;
  box-shadow: 0 0 20px 0 white;
  transition: all 0.2s;
}
@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 806px, 6px, 0px);
  }
  25% {
    clip: rect(0px, 6px, 112px, 0px);
  }
  50% {
    clip: rect(112px, 812px, 112px, 0px);
  }
  75% {
    clip: rect(0px, 812px, 112px, 806px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -30px);
  }
  60% {
    transform: translate(-50%, -15px);
  }
}
ul {
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 0;
  border-radius: 5px;
}
.el-pagination {
  padding-bottom: 20px;
}
.el-card /deep/ .el-card__body {
  padding: 0;
}
.right-item {
  margin-bottom: 20px;
}
.right-item li:first-child {
  border-top: 1px solid rgba(179, 216, 255, 0.5);
}
.right-item li {
  border-bottom: 1px solid rgba(179, 216, 255, 0.5);
}
.right-item .more {
  text-align: center;
  color: #3a8ee6;
  padding: 8px;
}
.right-item .more:hover {
  cursor: pointer;
  color: #3a8ee6;
}
.right-item .blog-type:hover,
.right-item .activeType {
  background-color: rgba(58, 142, 230, 0.3);
  cursor: pointer;
}
.right-item .tags {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px 13px 0;
  border-bottom: 1px solid rgba(179, 216, 255, 0.5);
}
.right-item .tag-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.right-item .tag-item .tag {
  background-color: #ecf5ff;
  box-sizing: border-box;
  display: inline-block;
  height: 22px;
  padding: 0 10px;
  line-height: 22px;
  font-size: 10px;
  color: #409eff;
  border-radius: 4px;
  white-space: nowrap;
  border: 1px solid #409eff;
  transition: 0.2s;
}
.right-item .tag-item .sjx-outer {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #409eff;
  position: relative;
  transition: 0.2s;
}
.right-item .tag-item .sjx-inner {
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 6px solid #ecf5ff;
  top: -6px;
  left: 1px;
  position: absolute;
  transition: 0.2s;
}
.right-item .tag-item:hover,
.right-item .activeTag {
  box-sizing: border-box;
}
.right-item .tag-item:hover .tag,
.right-item .activeTag .tag {
  color: white;
  background-color: #409eff;
  cursor: pointer;
}
.right-item .tag-item:hover .sjx-inner,
.right-item .activeTag .sjx-inner {
  border-right: 6px solid #409eff;
}
.blog-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
}
.recommend-blog {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  padding-right: 20px;
}
.recommend-blog a {
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
  line-height: 40px;
  display: block;
  text-decoration: none;
  color: black;
}
.recommend-blog a:hover {
  color: #3a8ee6;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: larger;
  font-weight: bold;
}
.total .title {
  display: flex;
  align-items: center;
}
.total .title .el-icon-back {
  font-weight: bolder;
  color: #3a8ee6;
  margin-right: 10px;
}
.total .title .el-icon-back:hover {
  cursor: pointer;
}
.blog-content:hover {
  /*border-left: 5px solid #3a8ee6;*/
  /*border-right: 5px solid #3a8ee6;*/
  background-color: rgba(58, 142, 230, 0.3);
  cursor: pointer;
}
.blog-content:hover .el-tag {
  color: white;
  background-color: #3a8ee6;
}
.blog-content {
  padding: 10px;
  height: auto;
  border-bottom: 1px solid #c7a35c;
  /*border-bottom: 1px solid rgba(34, 36, 38, .15);*/
  transition: 0.3s;
}
.blog-content .el-image {
  border-radius: 5px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.blog-content .blog-info {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 10px;
}
.blog-content .blog-info .user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}
.blog-content .blog-info .user-info .el-avatar {
  margin-right: 5px;
  width: 22px;
  height: 22px;
}
.blog-content .blog-info .user-info .header {
  text-decoration: none;
  color: #3a8ee6;
  font-weight: bold;
}
.blog-content .blog-info .blog-date {
  margin-right: 15px;
}
.blog-content .blog-info .blog-type {
  margin-left: auto;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}
@media screen and (max-width: 768px) {
  .blog-date {
    display: none;
  }
  .welcome {
    width: 100%;
  }
  .welcome .border {
    display: none;
  }
  .welcome .tit {
    font-size: 2rem;
    width: 100%;
    line-height: 50px;
    letter-spacing: 2px;
    height: auto;
  }
  .welcome .intro {
    font-size: 1rem;
    line-height: 30px;
  }
  .el-pagination {
    width: 100%;
  }
}
</style>