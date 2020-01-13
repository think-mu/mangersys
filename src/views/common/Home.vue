/*
 * @Author: huangzibin
 * @Date: 2020-01-10 17:00:28
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-13 10:03:00
 */

<template>
  <div class="wrapper">
    <v-head/>
    <v-side-bar/>
    <div class="content" :class="{'content-collapse':this.$store.state.collapse}">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home"
  import vHead from './Header'
  import vSideBar from './SideBar';

  export default {
    name: "Home",
    components:{
      vHead,
      vSideBar
    },
    data() {
      return {
        collapse : false
      }
    },
    created() {
       this.collapse = this.$store.state.collapse
    }
  }
</script>

<style scoped>
.content {
  position: absolute;
  
  top: 55px;
  left: 88px;
  right: 0;
  bottom: 0;
  transition: left .3s;
}
.content-collapse {
  left: 140px;
  transition: left .3s;
}
</style>
