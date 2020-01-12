/*
 * @Author: huangzibin
 * @Date: 2020-01-10 18:39:00
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-12 20:38:58
 * 头部
 */
<template>
  <div class="header">
    <div class="left">
      <img src="~assets/img/common/logo.png" alt="logo" class="logo">
      <h1 class="title">智慧养老政产民大数据服务平台</h1>
    </div>
    <div class="right">
      <div class="weather">
        <span class="city">广州</span>
        <span class="temperature">11/22℃</span>
        <span class="wtext">阴</span>
        <img class="wimg" src="http://app1.showapi.com/weather/icon/day/02.png" alt="天气">
        <span class="pm25">PM2.5:37</span>
      </div>
      <span class="news"><i class="el-icon-bell"><span>0</span></i></span>
      <el-button class="btn-exit" size="mini" type="primary" ><i class="el-icon-right el-icon--left"></i>退出</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
  .header {
   width: 100%;
   height: 55px;
   color: #fff; 
   z-index: 10;
   position: relative;
   display: flex;
   justify-content: space-between;
   top: 0;
   padding: 0 20px;
  }
  .header .left {
    display: flex;
    align-items: center;
  }
  .header .left .logo {
    max-height: 30px;
    cursor: pointer;
  }
  .header .left .title {
    display: inline-block;
    margin: 0 0 0 20px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
  }

  .header .right {
    display: flex;
    align-items: center;
  }
  .header .right .weather {
    display: inline-block;
    font-size: 14px;
  }
  .header .right .weather span {
    margin-right: 12px;
  }
  .header .right .weather .wimg {
    margin-right: 12px;
    height: 40px;
  }

  .header .right .news span {
    color: #FFC22C;
    margin-right: 12px;
  }

  .header .right .btn-exit {
    width: 60px;
  }
  .header .right .el-icon-right {
    margin: 0 3px 0 -6px;
  }
</style>
