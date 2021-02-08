<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/icon-left-font.png" />
    <HelloWorld msg="Bienvenue sur le réseau social de Groupomania" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
