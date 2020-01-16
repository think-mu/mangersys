/*
 * @Author: huangzibin
 * @Date: 2020-01-16 18:57:49
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-16 18:57:51
 */
<template>
  <div class="sidebar">
    <div style="background:#0D2C71;" class="icon-control">
      <i class="el-icon-s-fold" v-show="!isShowSider" @click="handleControl"></i>
      <i class="el-icon-s-unfold" v-show="isShowSider" @click="handleControl"></i>
      <i class="el-icon-full-screen" active-color="#fff"></i>
    </div>
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo side"
      @open="test++"
      @close="test++"
      :collapse="isCollapse"
      background-color="#0D2C71"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >

      <el-submenu index="main" :class="isActive ? 'title-block-active' : 'title-block-noactive'">
        <template slot="title"  >
          <img src="~assets/img/common/data.png" alt="数据计算中心" >
          <span slot="title" class="title-text">数据计算中心</span>
        </template>
        <el-menu-item index="main">主页</el-menu-item>
        <el-menu-item index="persondata">老人数据</el-menu-item> 
        <el-menu-item index="1-3">补助数据</el-menu-item>
      </el-submenu>

      <el-submenu index="2" :class="isActive ? 'title-block-active' : 'title-block-noactive'">
        <template slot="title"  >
          <img src="~assets/img/common/command.png" alt="决策指挥中心" >
          <span slot="title" class="title-text">决策指挥中心</span>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item> 
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>

      <el-submenu index="3" :class="isActive ? 'title-block-active' : 'title-block-noactive'">
        <template slot="title"  >
          <img src="~assets/img/common/government.png" alt="政务服务中心" >
          <span slot="title" class="title-text">政务服务中心</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item> 
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>

      <el-submenu index="4" :class="isActive ? 'title-block-active' : 'title-block-noactive'">
        <template slot="title"  >
          <img src="~assets/img/common/industry.png" alt="产业服务中心" >
          <span slot="title" class="title-text">产业服务中心</span>
        </template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item> 
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-submenu>
      
      <el-submenu index="5" :class="isActive ? 'title-block-active' : 'title-block-noactive'">
        <template slot="title"  >
          <img src="~assets/img/common/livelihood.png" alt="民生服务中心" >
          <span slot="title" class="title-text">民生服务中心</span>
        </template>
        <el-menu-item index="5-1">选项1</el-menu-item>
        <el-menu-item index="5-2">选项2</el-menu-item> 
        <el-menu-item index="5-3">选项3</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isCollapse: true,
      isShowSider: true,
      isActive: false,
      test:0
    };
  },
  methods: {
    handleControl() {
       this.isCollapse = !this.isCollapse
       this.isShowSider = !this.isShowSider
       this.isActive = !this.isActive
       this.$store.commit('changeCollapse')
       console.log( this.$store.state.collapse)
    },
    handleClose(){
      console.log("12");
      
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace('/', '');
      //return this.$router.replace(this.path)

    }
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.sidebar {
  z-index: 999;
  overflow: auto;
  background-color:#0d2c71; 
  position: fixed;
  top: 55px;
  color: #acb6c0;
  height: 100%;
}
.sidebar .icon-control {
  flex: 0 0 88px;
  width: 88px;
  height: 44px;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #6a6c6a;
}
.sidebar .icon-control i{
  right: 50%;
  line-height: 43px;
  font-size: 16px;
  transition: color .3s;
  margin-right: -8px;
  color: #fff;
}
.sidebar .icon-control i:hover {
  color: #409EFF;
}
.sidebar .side {
  min-width: 88px;
  max-width: 140px;
  border-right: none;
}

.sidebar .side .title-block-noactive img{
  width: 30.4px;
  height: 30.4px;
  vertical-align: center;
}
.sidebar .side .title-block-active img {
  width: 15px;
  height: 15px;
  margin-right: 9px;
}

 .title-block-noactive >>> .el-submenu__title  {
  height: 100.8px;
  margin-top: 0;
  font-size: 12px;
  display:block;
  align-items: center;
  text-align: center;
}
 .title-block-noactive >>> .el-submenu__title span {
    display: flex;
    visibility:visible;
    line-height: 17px;
    width: 48px;
    height: 48px; 
    white-space: normal;
    font-size: 12px;
    align-items: center;
    margin-top: -10px;
}
.title-block-noactive .title-text {
    visibility:visible;
    display: flex;
    line-height: 17px;
    width: 48px;
    height: 48px;
    white-space: normal;
    font-size: 12px;
    align-items: center;
    color: #fff;
}

.title-block-active .title-text {
  font-size: 12px;
  color: #fff;
}

.title-block-active {
 display: block;
 color: #fff;
}
.title-block-active >>> .el-submenu__title {
  height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.title-block-active >>> i{
  color: #fff;
  margin-right: -10px;
}
.title-block-active .el-menu-item {
  min-width: 140px;
  height: 40px;
  font-size: 10px;
  display: flex;
  align-items: center;
}

</style>
