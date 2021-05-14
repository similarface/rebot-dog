<template>
  <div class="d-flex flex-column">
      <!--    菜单栏-->
      <div region="north" class="north">
        <navbar/>
      </div>
     <!--    中间内容部分-->
      <app-main></app-main>
      <!--    footer -->
      <div region="south" class="south">
        <footer-layer/>
      </div>
    </div>
</template>

<script>

import {Navbar, FooterLayer,AppMain } from "./components";

export default {
  name: "Layout",
  components: {Navbar, FooterLayer,AppMain}
}
</script>

<style scoped>

</style>