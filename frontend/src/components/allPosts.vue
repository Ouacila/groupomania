<template>
  <div class="form-group">
    <button v-on:click="logOut()" id="logOut" name="logOut" class="btn btn-warning">Se déconnecter</button>
    <button
      v-on:click="redirection()"
      id="create"
      name="create"
      class="btn btn-primary"
    >Partager un post</button>
    <button
      v-on:click="deleteAccount()"
      id="deleteAccount"
      name="deleteAccount"
      class="btn btn-danger"
    >Suppression du compte</button>
    <div class="content-post">
      <h1>Articles partagés par vos collègues</h1>
      <div class="posts">
        <div v-for="Post in Posts" :key="Post" class="post" v-on:click="article(Post.id)">
          <h2>Partagé par: {{Post.userPseudo}}</h2>
          <h3>{{Post.title}}</h3>
          <p>{{Post.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Posts: null
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem("authToken");
    axios
      .get("http://localhost:7070/api/posts", this.Posts)
      .then(response => {
        this.Posts = response.data;
        console.log(this.Posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  methods: {
    logOut() {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.clear();
      this.$router.push("/login");
    },
    redirection() {
      this.$router.push("/create");
    },
    article(postId) {
      this.$router.push(`/post/${postId}`);
    },
    deleteAccount() {
      axios.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("authToken");
      axios
        .delete(`http://localhost:7070/auth/${this.$route.params.id}`, {
          header: {
            "Content-Type": "application/json"
          }
        })
        .then(response => {
          console.log(response);
          localStorage.clear();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
button {
  font-family: "Jura", sans-serif;
  color: black;
}
.content-post {
  h1 {
    margin-top: 3%;
    font-family: "Jura", sans-serif;
    font-size: 2.2rem;
  }
  .posts {
    width: 70%;
    text-align: center;
    margin: auto;
  }
  .post {
    border: 2px solid #d1515a;
    border-radius: 1rem;
    margin: 4rem;
    h2 {
      margin-top: 2%;
      margin-bottom: 5%;
      font-size: 2.1rem;
      font-family: "Prompt", sans-serif;
      color: #1f3150;
      text-decoration: underline #d1515a;
    }
    h3 {
      margin-bottom: 2%;
      font-size: 1.8rem;
      font-family: "Prompt", sans-serif;
    }
    p {
      font-size: 1.7rem;
      font-family: "Cormorant Garamond", serif;
    }
  }
}
</style>
