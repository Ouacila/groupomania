<template>
  <div class="home">
    <img class="logo" alt="logo-responsive" src="../assets/icon.png" />
    <img class="Logo" alt="Vue logo" src="../assets/icon-left-font.png" />
    <h1>Bienvenue sur le réseau social de Groupomania</h1>
    <p>
      Notre entreprise, spécialisée dans la grande distribution, est en pleine
      expansion. Nous avons actuellement plus de 600 collaborateurs avons
      beaucoup recruté depuis quelques années. Nous étions uniquement 300 il y a
      3 ans.
    </p>
    <footer>
      <img
        class="img-footer"
        alt="Vue logo"
        src="../assets/icon-white-footer.png"
      />
    </footer>
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
.home {
  .logo {
    width: 0%;
  }
  h1 {
    font-family: "Prompt", sans-serif;
    font-size: 2rem;
    width: 90%;
    text-align: center;
    margin: auto;
  }
  p {
    width: 80%;
    text-align: center;
    margin: auto;
    padding-top: 3%;
    font-family: "Jura", sans-serif;
    font-size: 1.3rem;
  }
  footer {
    width: 100%;
    height: 200px;
    position: relative;
    position: fixed;
    bottom: 0;
    background-color: #123773;
    z-index: 0;
    .img-footer {
      height: 100%;
      z-index: 1;
    }
  }
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 1024px) {
  .home {
    .Logo {
      display: none;
    }
    .logo {
      width: 20%;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    h1 {
      margin-bottom: 3%;
    }
    p {
      width: 75%;
    }
  }
}

/* Site responsive pour petits écrans*/
@media all and (max-width: 700px) {
  .home {
    margin-bottom: 70%;
    .logo {
      width: 30%;
    }
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 17px;
    }
  }
}
/* Affichage site Grands ecrans 4K*/
@media all and (min-width: 1500px) and (max-width: 2300px) {
  .home {
    h1 {
      font-size: 3.2rem;
    }
    p {
      font-size: 2.6rem;
    }
  }
}
</style>
