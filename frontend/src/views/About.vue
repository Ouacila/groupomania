<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/icon-left-font.png" />
    <div class="container">
      <h1>A propos de votre réseau social d'entreprise</h1>
    </div>
    <div class="container">
      <p class="org-description is-size-4">
        La direction a promis des mesures d’amélioration de la communication entre collègues,
        entre autre un nouveau projet numérique. Il s’agit de la création d’un réseau social
        interne moderne et ludique, qui permettra aux employés de se connaître dans un cadre plus informel.
      </p>
      <p class="org-description is-size-4">
        Le comité de pilotage a créé une liste de propositions de fonctionnalités de l’outil en partie
        issues des réponses à la questions ouverte de l’enquête et en partie d’un brainstorm entre membres
        du comité. Vous pouvez dès maintenant profiter de l’outil de communication en vous inscrivant.
      </p>
    </div>
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
  h1 {
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
</style>
