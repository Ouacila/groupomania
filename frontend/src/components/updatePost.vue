<template>
  <div id="updatePost">
    <button id="Posts" name="Posts" class="btn btn-info">
      <router-link to="/allPosts">Voir tous les posts</router-link>
    </button>
    <h1>Modifier votre post</h1>
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
      <label class="col-md-10 control-label" for="content">
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
      <label class="col-md-6 control-label" for="submitbutton"></label>
      <button
        v-on:click="update(post.id)"
        id="submitbutton"
        name="submitbutton"
        class="btn btn-info"
      >Modifier mon post</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        content: ""
      }
    };
  },
  methods: {
    update() {
      axios
        .put(
          `http://localhost:7070/api/post/${this.$route.params.id}`,
          this.post
        )
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
#updatePost {
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
    font-family: "Courier New", Courier, monospace;
    font-size: 20px;
    font-weight: bold;
    h4 {
      justify-content: center;
      margin: auto;
      font-weight: bold;
      font-size: 2.5rem;
    }
    input,
    textarea {
      width: 100%;
      height: 100px;
      font-family: "Courier New", Courier, monospace;
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
      text-align: center;
      margin: auto;
      display: flex;
    }
    #submitbutton {
      width: 300px;
      height: 40px;
      font-family: "Courier New", Courier, monospace;
      font-weight: bold;
      font-size: 20px;
      color: #1f3150;
      border: 2px solid #d1515a;
      border-radius: 1rem;
    }
  }
}
a {
  color: black;
}
</style>