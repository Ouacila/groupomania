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

    #nav {
      margin-left: -30%;
    }
  }
}
</style>
