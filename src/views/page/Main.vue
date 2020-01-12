<template>
  <div class="container">
    12312
    <div class="boxone"></div>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
      }
    },
    created: {
     foo() {
       console.log("123");
       
     }
    }
  }
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: blueviolet;
  display: flex;
  transition: left .3s ease-in-out;
  color: #fff;
}
.boxone{
  position: fixed;
  right: 0;
  height: 100px;
  width: 100px;
  background-color: rgb(236, 152, 41);
}
</style>
