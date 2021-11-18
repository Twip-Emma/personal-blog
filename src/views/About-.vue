<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-18 17:10:48
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-18 21:31:33
 * @Description: file content
-->
<template>
  <div id="body-wrap">
    <!-- <nav class="not_index_bg" id="nav" style="background-image:url(https://api.ixiaowai.cn/api/api.php)">
        <div id="page_site-info">
            <div id="site-title">
                <span class="blogtitle"></span>
                <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
                <script>
                    var typed = new Typed(".blogtitle", {
                        strings: ['求知若饥，虚心若愚','Stay Hungry Stay Foolish'],
                        startDelay: 300,
                        typeSpeed: 100,
                        loop: true,
                        backSpeed: 50,
                        showCursor: true
                    });
                </script>
            </div>
        </div>
    </nav> -->
    <main id="content-outer">
        <div class="layout_page" id="content-inner">
            <div class="aside_content" id="aside_content">
                
                <div class="card-widget card-info">
                    <div class="card-content">
                        <div class="card-info-avatar is-center">
                            <img class="avatar-img" src="https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png" alt="avatar">
                            <div class="author-info__name">七画一只妖</div>
                            <div class="author-info__description">简介简介简介简介简介简介简介简介简介简介简介简介</div>
                        </div>
                        <div class="card-info-social-icons is-center">
                            <a class="social-icon" href="https://github.com/laoxuai" target="_blank">
                                <i class="fa fa-github"></i>
                            </a>
                            <a class="social-icon" href="mailto:878006658@qq.com" target="_blank">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
								
                <div class="card-widget card-announcement">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-bullhorn" aria-hidden="true"></i>
                            <span>一言</span>
                        </div>
                        <div id="hitokoto">一言一言一言一言一言</div>
                    </div>
                </div>
                <div class="card-widget card-announcement">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>今日诗词</span>
                        </div>
                        <div id="jinrishici-sentence">这是诗词，这是诗词</div>
                    </div>
                </div>

                <div class="card-widget card-webinfo">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            <span>站点信息</span>
                        </div>
                        <div class="webinfo">
                            <div class="webinfo-item">
                                <div class="webinfo-site-uv-name">本站访客数 :</div>
                                <div class="webinfo-site-uv-count" id="busuanzi_value_site_uv">120</div>
                            </div>
                            <div class="webinfo-item">
                                <div class="webinfo-site-name">本站总访问量 :</div>
                                <div class="webinfo-site-pv-count" id="busuanzi_value_site_pv">9999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <article id="page">
                <div class="article-container">
                    <h2>听听音乐</h2>

                    <hr>
                    
					<h2>技能属性</h2>
					<div class="skillbox">
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #FF0066 0%, #FF00CC 100%); width: 75%">
								<span>Java</span>
							</div>
							<div class="skill-bar-percent">75%</div>
						</div>
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #9900FF 0%, #CC66FF 100%); width: 40%">
								<span>前端</span>
							</div>
							<div class="skill-bar-percent">40%</div>
						</div>
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #2196F3 0%, #42A5F5 100%); width: 60%">
								<span>Spring</span>
							</div>
							<div class="skill-bar-percent">60%</div>
						</div>
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #00BCD4 0%, #80DEEA 100%); width: 70%">
								<span>SpringMVC</span>
							</div>
							<div class="skill-bar-percent">70%</div>
						</div>
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #4CAF50 0%, #81C784 100%); width: 60%">
								<span>Mybatis</span>
							</div>
							<div class="skill-bar-percent">60%</div>
						</div>
						<div class="skillbar">
							<div class="skillbar-title" style="background: linear-gradient(to right, #FFEB3B 0%, #FFF176 100%); width: 75%">
								<span>数据结构与算法</span>
							</div>
							<div class="skill-bar-percent">75%</div>
						</div>
					</div>


                    <hr>
					<h2>刷题</h2>
                    <div class="tool">
                        <a href="https://leetcode-cn.com/problemset/all/" target="_blank">Leetcode</a><br>
						<a href="https://www.nowcoder.com/ta/coding-interviews" target="_blank">剑指 Offer</a>				
                    </div>
					
					<hr>
                    <h2>工具</h2>
                    <div class="tool">
                        <a href="https://mdnice.com/" target="_blank">Markdown Nice</a><br>
						<a href="http://lowcode.magicalcoder.com/" target="_blank">magicalcoder</a><br>
						<a href="https://www.ssyer.com/" target="_blank">沙沙野</a><br>						
						<a href="http://www.network-science.de/ascii/" target="_blank">ASCII Generator</a>						
                    </div>
                </div>
            </article>
         </div>
    </main>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
html {
    height: 100%;
}
body {
    position: relative;
    min-height: 100%;
    background: #eee;
    color: #4c4948;
    font-size: 14px;
    font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, "Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    line-height: 2;
}
body {
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
    position: relative;
    margin: 1rem 0 .7rem;
    color: #344c67;
    font-weight: 700
}
hr:before {
    position: absolute;
    top: -10px;
    left: 5%;
    z-index: 1;
    color: #49b1f5;
    content: '\f0c4';
    font: normal normal normal 14px/1 FontAwesome;
    font-size: 20px;
    transition: all 1s ease-in-out;
}
hr {
    position: relative;
    margin: 2rem auto;
    width: calc(100% - 4px);
    border: 2px dashed #a4d8fa;
    background: #fff;
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
body, li, span, p {
    cursor: url(https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cursor/texto.cur),auto;
}
a {
    background-color: transparent;
    cursor: url(https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cursor/ayuda.cur),auto;
}
strong{
    color: #FF0066;
}
#body-wrap {
    position: relative;
    /* display: box; */
    display: flex;
    box-flex: 1;
    flex: 1 auto;
    -webkit-box-orient: vertical;
    flex-direction: column;
    transition: all .5s;
}
#nav.not_index_bg {
    height: 20rem;
}
#nav {
    position: relative;
    margin-bottom: 1rem;
    margin-top: -2rem;
    width: 100%;
    background-color: #49b1f5;
    background-attachment: local;
    background-position: center;
    background-size: cover;
}
#page_site-info {
    position: absolute;
    top: 10rem;
    width: 100%;
}
#site-title {
    color: #eee;
    text-align: center;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, .15);
    line-height: 1.5;
    font-weight: 700;
    font-size: 1.3rem;
    animation: titlescale 1s;
}
main {
    display: block;
}

#content-outer {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
}
h1 {
    font-size: 2em;
    margin: .67em 0;
}
.layout_page {
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
}

#page{
    margin-top: 20px;
    width: 75%;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    transition: all .3s;
}
#page{
    padding: 40px 44px 44px;
}

#aside_content {
    width: 25%;
}
#aside_content .card-widget {
    overflow: hidden;
    margin-top: 20px;
    border-radius: 8px;
    background: #fff;
    -webkit-box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
}
#aside_content .card-content {
    padding: 1rem 1.2rem;
}

.skillbar {
    position: relative;
    display: block;
    max-width: 360px;
    margin: 15px 10px;
    background: #eee;
    height: 30px;
    border-radius: 35px;
    -moz-border-radius: 35px;
    -webkit-border-radius: 35px;
    -webkit-transition: 0.4s linear;
    -moz-transition: 0.4s linear;
    -o-transition: 0.4s linear;
    transition: 0.4s linear;
    -webkit-transition-property: width, background-color;
    -moz-transition-property: width, background-color;
    -o-transition-property: width, background-color;
    transition-property: width, background-color;
}

.skillbar .skillbar-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 110px;
    font-size: 0.9rem;
    color: #ffffff;
    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
}
.skillbar .skillbar-title span {
    display: block;
    background: rgba(0, 0, 0, 0.15);
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    border-radius: 35px;
    -webkit-border-radius: 35px;
    -moz-border-radius: 35px;
}
.skillbar .skill-bar-percent {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    color: rgba(0, 0, 0, 0.5);
}

.tool a {
    color: #FF0066;
}

.is-center {
    text-align: center;
}

#aside_content .card-info img {
    display: inline-block;
    padding: 5px;
    width: 120px;
    height: 120px;
    border-radius: 70px;
    vertical-align: top;
    transition: all .3s;
}
img {
    max-width: 100%;
    transition: all .2s;
}
.avatar-img {
    animation: avatar_turn_around 2s linear infinite;
}
#aside_content .card-info .author-info__name {
    font-weight: 500;
    font-size: 1.1rem;
}
aside_content .card-info .author-info__description {
    margin-top: -.3rem;
}
#aside_content .card-info .card-info-social-icons {
    margin: .3rem 0 -.3rem;
}
#aside_content .card-info .card-info-social-icons .social-icon {
    margin: 0 .5rem;
    color: #4c4948;
    font-size: 1.5rem;
}

#aside_content .item-headline {
    font-size: .8rem;
}
#aside_content .item-headline span {
    margin-left: .5rem;
}

#aside_content .card-webinfo .webinfo {
    padding: .2rem 1rem;
}
#aside_content .card-webinfo .webinfo .webinfo-item {
    display: block;
    padding: 4px 0 0;
}
#aside_content .card-webinfo .webinfo .webinfo-item div:first-child {
    display: inline-block;
}
#aside_content .card-webinfo .webinfo .webinfo-item div:last-child {
    display: inline-block;
    /* float: right; */
}
#footer {
    position: relative;
    margin-top: 1rem;
    background-attachment: local;
    background-position: bottom;
    background-size: cover;
}
#footer-wrap {
    position: relative;
    padding: 2rem 1rem;
    text-align: center;
}


#footer, .layout_page, .layout_post {
    -webkit-animation: main 1s;
    -moz-animation: main 1s;
    -o-animation: main 1s;
    -ms-animation: main 1s;
    animation: main 1s;
}

@media screen and (min-width: 768px){
    #site-title {
        font-size: 2rem;
    }

}

@media screen and (max-width: 768px){
    .layout_page {
        padding: 0 5px !important;
    }
    #page {
        margin: 0;
        padding: 1.8rem 1.3rem;
    }
}

@media screen and (max-width: 900px){
    #page{
        width: 100% !important;
    }
    #aside_content{
        width: 100% !important;
    }
    .layout_page {
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -o-box-orient: vertical;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}



@media screen and (min-width: 900px){
    #aside_content .card-widget {
        margin-right: 15px;
    }
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #FF0066 0%, #FF00CC 100%); width: 85%
}

::-webkit-scrollbar-track {
    background-color: transparent
}



</style>