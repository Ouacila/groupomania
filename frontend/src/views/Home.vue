<template>
  <div class="home">
    <img class="logo" alt="logo-responsive" src="../assets/icon.png" />
    <img class="Logo" alt="Vue logo" src="../assets/icon-left-font.png" />
    <h1>Bienvenue sur le réseau social de Groupomania</h1>
    <p>Notre entreprise, spécialisée dans la grande distribution, est en pleine expansion. Nous avons actuellement plus de 600 collaborateurs avons beaucoup recruté depuis quelques années. Nous étions uniquement 300 il y a 3 ans.</p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import signup from "../components/signup";

export default {
  /* name: "app",
  components: {
    signup,
  },*/
};
</script>
<style scoped lang="scss">
.logo {
  width: 0%;
}
h1 {
  font-family: "Jura", sans-serif;
  font-size: 2rem;
}
p {
  width: 80%;
  text-align: center;
  margin: auto;
  padding-top: 3%;
  font-family: "Prompt", sans-serif;
  font-size: 1.3rem;
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 1024px) {
  .home {
    margin-left: -25%;
    .Logo {
      display: none;
    }
    .logo {
      width: 15%;
      margin-bottom: 0%;
    }
    h1 {
      font-size: 1rem;
      margin: 0px;
      padding: 0px;
    }
    p {
      font-size: 1rem;
      width: 45%;
    }
  }
}
</style>
