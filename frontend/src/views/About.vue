<template>
  <div class="about">
    <img class="logo" alt="logo-responsive" src="../assets/icon.png" />
    <img class="Logo" alt="Vue logo" src="../assets/icon-left-font.png" />
    <h1>A propos de votre réseau social d'entreprise</h1>
    <div class="paragraphes">
      <p class="about1">
        La direction a promis des mesures d’amélioration de la communication entre collègues,
        entre autre un nouveau projet numérique. Il s’agit de la création d’un réseau social
        interne moderne et ludique, qui permettra aux employés de se connaître dans un cadre plus informel.
      </p>
      <p class="about2">
        Le comité de pilotage a créé une liste de propositions de fonctionnalités de l’outil en partie
        issues des réponses à la questions ouverte de l’enquête et en partie d’un brainstorm entre membres
        du comité. Vous pouvez dès maintenant profiter de l’outil de communication en vous inscrivant.
      </p>
    </div>
    <footer>
      <img class="img-footer" alt="Vue logo" src="../assets/icon-white-footer.png" />
    </footer>
  </div>
</template>

<script>
/*import allPosts from "../components/allPosts";

export default {
  name: "app",
  components: {
    allPosts,
  },
};*/
</script>

<style scoped lang="scss">
.about {
  margin-bottom: 30%;
  .logo {
    width: 0%;
  }
  h1 {
    width: 90%;
    text-align: center;
    margin: auto;
    font-family: "Prompt", sans-serif;
    font-size: 2rem;
  }
  p {
    font-family: "Jura", sans-serif;
    padding-top: 50px;
    width: 80%;
    text-align: center;
    margin: auto;
    font-size: 1.3rem;
  }
}
footer {
  width: 100%;
  height: 200px;
  position: fixed;
  bottom: 0;
  background-color: #1f3150;

  .img-footer {
    height: 100%;
  }
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 1024px) {
  .about {
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
  }
}
/* Site responsive pour petits écrans*/
@media all and (max-width: 700px) {
  .about {
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
  .about {
    h1 {
      font-size: 3.2rem;
    }
    p {
      font-size: 2.6rem;
    }
  }
}
</style>
