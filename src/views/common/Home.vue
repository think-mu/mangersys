/*
 * @Author: huangzibin
 * @Date: 2020-01-10 17:00:28
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-01-10 18:49:33
 */

<template>
  <div class="wrapper">
    <v-head/>
    <v-side-bar/>
    首页
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
      }
    },
  }
</script>

<style scoped>

</style>
