<template>
  <div class="article">
    <button id="Posts" name="Posts" class="btn btn-info">
      <router-link to="/allPosts">Voir tous les posts</router-link>
    </button>
    <button v-on:click="logOut()" id="logOut" name="logOut" class="btn btn-warning">Se déconnecter</button>
    <button id="create" name="create" class="btn btn-primary">
      <router-link to="/create">Partager un post</router-link>
    </button>
    <div class="postU">
      <h1>Message de: {{post.userPseudo}}</h1>
      <h2>{{post.title}}</h2>
      <p>{{post.content}}</p>
    </div>
    <button
      v-on:click="update(post.id)"
      id="Modifier"
      name="Modifier"
      class="btn btn-success"
    >Modifier le post</button>
    <button
      v-on:click="deletePost()"
      id="Supprimer"
      name="Supprimer"
      class="btn btn-danger"
    >Supprimer le post</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem("authToken");
    axios
      .get(`http://localhost:7070/api/posts/${this.$route.params.id}`)
      .then(response => {
        console.log("response ===>", response.data);
        this.post = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorization"];
      this.$router.push("/login");
    },
    deletePost() {
      axios.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("authToken");
      axios
        .delete(`http://localhost:7070/api/post/${this.$route.params.id}`)
        .then(response => {
          console.log(response.data);
          this.$router.push("/allPosts");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update(postId) {
      this.$router.push(`/update/${postId}`);
    }
  }
};
</script>

<style scoped lang="scss">
.postU {
  width: 70%;
  text-align: center;
  margin: auto;
  h1 {
    margin-top: 3%;
    margin-bottom: 5%;
    text-decoration: underline;
    font-family: "Shippori Mincho B1", serif;
    font-size: 2.5rem;
  }
  h2 {
    font-family: "Mukta", sans-serif;
    font-size: 2rem;
    margin-bottom: 3%;
  }
  p {
    font-family: "Indie Flower", cursive;
    font-size: 1.5rem;
  }
}
a {
  color: black;
}
</style>