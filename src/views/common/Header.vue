/*
 * @Author: huangzibin
 * @Date: 2020-01-10 18:39:00
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-10 19:41:59
 * 头部
 */
<template>
  <div class="header">
    <div class="left">
      <img src="~assets/img/common/logo.png" alt="logo" class="logo">
      <h1 class="title">智慧养老政产民大数据服务平台</h1>
    </div>
    <div class="right"></div>
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
   position: fixed;
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
</style>
