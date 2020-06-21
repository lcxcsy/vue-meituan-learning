<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/My">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/order">我的订单 </nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="/order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/order">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="/userCenter"></nuxt-link>登录商家中心
          </dd>
          <dd>
            <nuxt-link to="/hezuo"></nuxt-link>我想合作
          </dd>
          <dd>
            <nuxt-link to="/kaidian"></nuxt-link>免费手机开店
          </dd>
          <dd>
            <nuxt-link to="/kaipiao"></nuxt-link>商家免费开票
          </dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>
          <dl class="food">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>特色小吃 </dd>
            <dd>烧烤</dd>
            <dd>火锅</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>蜘蛛侠</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                     alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                     alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                     alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                     alt="美团app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
