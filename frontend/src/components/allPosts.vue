<template>
  <div class="form-group">
    <button
      v-on:click="logOut()"
      id="logOut"
      name="logOut"
      class="btn btn-warning"
    >
      Se déconnecter
    </button>
    <button
      v-on:click="redirection()"
      id="create"
      name="create"
      class="btn btn-primary"
    >
      Partager un post
    </button>
    <button
      v-on:click="deleteAccount()"
      id="deleteAccount"
      name="deleteAccount"
      class="btn btn-danger"
    >
      Suppression du compte
    </button>
    <div class="content-post">
      <h1>Articles partagés par vos collègues</h1>
      <div class="posts">
        <div
          v-for="Post in Posts"
          :key="Post"
          class="post"
          v-on:click="article(Post.id)"
        >
          <h2>Partagé par: {{ Post.userPseudo }}</h2>
          <h3>{{ Post.title }}</h3>
          <p>{{ Post.content }}</p>
        </div>
      </div>
    </div>
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
      Posts: null,
    };
  },
  mounted() {
    axios.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem("authToken");
    axios
      .get("http://localhost:7070/api/posts", this.Posts)
      .then((response) => {
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
      const userId = localStorage.getItem("userId");
      axios
        .delete(`http://localhost:7070/auth/${userId}`)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/signup");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
button {
  font-family: "Jura", sans-serif;
  color: black;
}
.content-post {
  margin-bottom: 30%;
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
#create,
#logOut,
#deleteAccount {
  border: 2px solid black;
  margin: 2% 2%;
}
@media all and (max-width: 1024px) {
  .content-post {
    .posts {
      width: 90%;
    }
  }
}
@media all and (max-width: 700px) {
  .content-post {
    margin-bottom: 70%;
    h1 {
      font-size: 1.8rem;
      margin-bottom: 10%;
      margin-top: 10%;
    }

    .posts {
      width: 100%;
    }
    .post {
      width: 90%;
      text-align: center;
      margin: auto;
      margin-bottom: 8%;
      justify-content: center;
      padding: 10px 10px;
      h2 {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1.2rem;
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
  .content-post {
    h1 {
      font-size: 3.2rem;
    }
    .post {
      h2 {
        font-size: 3rem;
      }
      h3 {
        font-size: 2.8rem;
      }
      p {
        font-size: 2.6rem;
      }
    }
  }
}
</style>
