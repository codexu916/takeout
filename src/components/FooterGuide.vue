<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on:$route.path==='/msite'}" @click="goto('/msite')">
      <span><i class="iconfont iconshouye"></i></span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/search'}" @click="goto('/search')">
      <span><i class="iconfont iconsearch"></i></span>
      <span>查找</span>
    </span>
   <span class="guide-item" :class="{on:$route.path==='/order'}" @click="goto('/order')">
      <span><i class="iconfont icondingdan"></i></span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')">
      <span><i class="iconfont iconwode"></i></span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style scoped>
.footer-guide{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  
}
.guide-item{
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
}
.iconfont{
  font-size: 20px;
}
.guide-item.on{
  color: blue;
}
</style>
