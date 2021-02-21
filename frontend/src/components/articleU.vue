<template>
  <div class="article">
    <button v-on:click="logOut()" id="logOut" name="logOut" class="btn btn-danger">Se déconnecter</button>
    <button
      v-on:click="redirection()"
      id="create"
      name="create"
      class="btn btn-primary"
    >Partager un post</button>
    <div v-for="Post in Posts" :key="Post" class="postUnique">
      <h1>{{Post.title}}</h1>
      <p>{{Post.content}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: ""
    };
  },
  mounted() {
    axios
      .get(
        "http://localhost:7070/api/posts/" + encodeURIComponent(this.id),
        this.Post
      )
      .then(response => {
        this.Post = response.data;
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorization"];
      this.$router.push("/login");
    },
    redirection() {
      this.$router.push("/create");
    }
  }
};
</script>

<style scoped lang="scss">
</style>