<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 12:14:06
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-19 12:15:28
 * @Description: file content
-->
<template>
  <el-card
    v-if="messageList.length > 0"
    class="animate__animated animate__fadeInLeft"
  >
    <ul style="padding: 0" class="comment-list">
      <li class="comment" v-for="ms in messageList" :key="ms.id">
        <el-avatar v-if="ms.avatar !== ''" :src="ms.avatar"></el-avatar>
        <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
        <div class="content">
          <div
            style="display: flex; justify-content: space-between; width: 100%"
          >
            <div class="nkname">
              <span class="name">{{ ms.nickname }} </span>
              <span class="date">{{ ms.createTime }}</span>
            </div>
          </div>
          <p class="reply">{{ ms.content }}</p>
        </div>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      messageList: [
        {
          id: "xxxx1",
          avatar: "???",
          nickname: "昵称",
          createTime: "2021-11-17",
          content: "这是评论1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.el-container {
  display: block;
}

.publish {
  margin-bottom: 20px;
}

.nkname {
  margin: 10px;
}

.author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.img {
  width: 300px;
  margin: 20px;
}

.comment {
  border-bottom: 1px dashed #ccc;
  margin: 30px 0;
  display: flex;
}

.date {
  color: #999;
  margin-left: 10px;
}

.blog {
  color: #349edf;
  margin-left: 10px;
}

.nkname {
  margin-left: 10px;
  max-width: 530px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.reply {
  margin-left: 10px;
}

.rep {
  color: #349edf;
}

.del {
  color: red;
}

.op {
  color: #ddd;
  font-weight: lighter;
}
.op:hover {
  cursor: pointer;
}

.content {
  text-align: left;
  font-size: 14px;
  flex-grow: 1;
}
</style>