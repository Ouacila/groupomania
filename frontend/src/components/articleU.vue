<template>
  <div class="article">
    <button id="Posts" name="Posts" class="btn btn-info">
      <router-link to="/allPosts">Voir tous les posts</router-link>
    </button>
    <button
      v-on:click="logOut()"
      id="logOut"
      name="logOut"
      class="btn btn-warning"
    >
      Se déconnecter
    </button>
    <button id="create" name="create" class="btn btn-primary">
      <router-link to="/create">Partager un post</router-link>
    </button>
    <div class="postU">
      <h1>Message de: {{ post.userPseudo }}</h1>
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
    <button
      v-on:click="update(post.id)"
      id="Modifier"
      name="Modifier"
      class="btn btn-success"
    >
      Modifier le post
    </button>
    <button
      v-on:click="deletePost()"
      id="Supprimer"
      name="Supprimer"
      class="btn btn-danger"
    >
      Supprimer le post
    </button>
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
import axios from "axios";
export default {
  data() {
    return {
      post: {},
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem("authToken");
    axios
      .get(`http://localhost:7070/api/posts/${this.$route.params.id}`)
      .then((response) => {
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
        .then((response) => {
          console.log(response.data);
          this.$router.push("/allPosts");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    update(postId) {
      axios.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("authToken");
      this.$router.push(`/update/${postId}`);
    },
  },
};
</script>

<style scoped lang="scss">
.article {
  margin-bottom: 50%;
  #Modifier,
  #Supprimer {
    margin-bottom: 30%;
    border: 2px solid black;
    color: black;
    margin-left: 5px;
  }
  #Posts,
  #logOut,
  #create {
    border: 2px solid black;
    margin: 2% 2%;
  }
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
}
footer {
  width: 100%;
  height: 200px;
  position: relative;
  position: fixed;
  bottom: 0;
  background-color: #1f3150;
  z-index: 0;
  .img-footer {
    height: 100%;
    z-index: 1;
  }
}
@media all and (max-width: 700px) {
  .article {
    .postU {
      h1 {
        font-size: 1.8rem;
        margin-top: 5%;
      }
      h2 {
        font-size: 1.6rem;
        margin-top: 5%;
        margin-bottom: 7%;
      }
      p {
        font-size: 1.2rem;
        text-align: justify;
      }
    }
  }
}
/* Affichage site Grands ecrans 4K*/
@media all and (min-width: 1500px) and (max-width: 2300px) {
  button {
    width: 30%;
    font-size: 2.4rem;
  }
  .article {
    .postU {
      h1 {
        font-size: 3rem;
      }
      h2 {
        font-size: 2.8rem;
      }
      p {
        font-size: 2.6rem;
      }
    }
    #Modifier,
    #Supprimer {
      margin-top: 20%;
    }
  }
}
</style>
