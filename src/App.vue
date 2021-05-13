<script>
import HelloWorld from "./views/HelloWorld.vue";
require("./assets/css/sass/main.sass")

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App1" />
  </div>
</template>
