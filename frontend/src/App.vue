<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Accueil</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/signup">Inscription</router-link>|
      <router-link to="/login">Connectez-vous</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  margin: 0;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  margin-bottom: 3%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d1515a;
    }
  }
}
@media all and (max-width: 1024px) {
  #app {
    margin: 0px;
    padding: 0px;
  }
}
/* Site responsive pour petits écrans*/
@media all and (max-width: 700px) {
  #nav {
    display: flex;
    flex-flow: column;
  }
}
/* Affichage site Grands ecrans 4K*/
@media all and (min-width: 1500px) and (max-width: 2300px) {
  #nav {
    font-size: 2rem;
    margin-top: 5%;
  }
}
</style>
