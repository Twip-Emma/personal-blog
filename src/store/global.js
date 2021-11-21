/*
 * @Author: 七画一只妖
 * @Date: 2021-11-20 23:22:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-21 10:22:46
 * @Description: file content
 */


// 数据初始化
export default {
    namespaced:true,
    actions: {
        test(){
            console.log("在vuex里面，成功了")
        }
    },
    mutations: {},
    state: {
        // 主页博客展示
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
    },
    getters: {}
}