<template>
  <div id="createPost">
    <button id="Posts" name="Posts" class="btn btn-info">
      <router-link to="/allPosts">Voir tous les posts</router-link>
    </button>
    <h1>Quoi de nouveau à partager avec vos collègues?</h1>
    <div class="form-group">
      <label class="col-md-10 control-label" for="textinput">
        <h4>Titre du post</h4>
      </label>
      <input
        id="textinput"
        name="textinput"
        type="text"
        v-model="post.title"
        placeholder="Titre de votre post"
        class="form-control input-md"
      />
    </div>
    <div class="form-group">
      <label class="col-md-12 control-label" for="content">
        <h4>Corps du post</h4>
      </label>
      <textarea
        id="content"
        name="content"
        type="text"
        v-model="post.content"
        placeholder="Contenu de votre post"
        class="content"
      />
    </div>
    <div class="form-group">
      <label class="submit" for="submitbutton"></label>
      <button v-on:click="create()" id="submitbutton" name="submitbutton">Partager mon post</button>
    </div>
    <footer>
      <img class="img-footer" alt="Vue logo" src="../assets/icon-white-footer.png" />
    </footer>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createPost",
  data() {
    return {
      post: {
        title: "",
        content: "",
        userPseudo: localStorage.getItem("userPseudo"),
        userId: localStorage.getItem("userId")
      }
    };
  },
  methods: {
    create() {
      axios.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("authToken");
      axios
        .post("http://localhost:7070/api/post", this.post)
        .then(response => {
          console.log(response.data);
          this.$router.push("/allPosts");
        })
        .catch(e => {
          this.errors.push(e);
        });
      // redirection vers la page d'affichage de tous les posts
    }
  }
};
</script>

<style scoped lang="scss">
#createPost {
  width: 100%;
  text-align: center;
  margin: auto;
  #Posts {
    border: 2px solid black;
    margin: 2% 2%;
  }
  h1 {
    font-family: "Jura", sans-serif;
    font-size: 2.5rem;
    margin-top: 3%;
  }
  .form-group {
    width: 80%;
    text-align: center;
    margin: auto;
    padding-top: 3%;
    padding-bottom: 3%;
    font-family: "Jura", sans-serif;
    font-size: 20px;
    font-weight: bold;

    h4 {
      font-family: "Jura", sans-serif;
      justify-content: center;
      margin: auto;
      padding-bottom: 2%;
      font-weight: bold;
      font-size: 2.2rem;
    }
    input,
    textarea {
      width: 100%;
      height: 100px;
      font-family: "prompt", sans-serif;
      font-weight: bold;
      text-align: center;
      box-sizing: border-box;
      border: 2px solid #d1515a;
      border-radius: 1rem;
    }
    #content {
      height: 250px;
    }
    label {
      width: 80%;
      text-align: center;
      margin: auto;
    }
    #submitbutton {
      width: 300px;
      height: 40px;
      font-family: "Jura", sans-serif;
      font-weight: bold;
      font-size: 20px;
      color: #1f3150;
      border: 2px solid #d1515a;
      border-radius: 1rem;
      margin-bottom: 30%;
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
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 1024px) {
  #createPost {
    .form-group {
      #submitbutton {
        margin-bottom: 40%;
      }
    }
  }
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 700px) {
  #createPost {
    h1 {
      font-size: 1.8rem;
    }
    .form-group {
      h4 {
        font-size: 1.5rem;
      }
      #submitbutton {
        margin-bottom: 80%;
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
  #createPost {
    h1 {
      font-size: 3.2rem;
    }
    .form-group {
      h4 {
        font-size: 2.8rem;
      }
      input,
      textarea {
        font-size: 2.6rem;
      }
      #submitbutton {
        width: 450px;
        height: auto;
        font-size: 2.4rem;
      }
    }
  }
}
</style>
