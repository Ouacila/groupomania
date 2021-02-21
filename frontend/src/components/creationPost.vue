<template>
  <div id="createPost">
    <h1>Quoi de nouveau à partager avec vos collègues?</h1>
    <div class="form-group">
      <label class="col-md-10 control-label" for="textinput"
        ><h4>Titre du post</h4></label
      >
      <div class="col-md-10">
        <input
          id="textinput"
          name="textinput"
          type="text"
          v-model="post.title"
          placeholder="Titre de votre post"
          class="form-control input-md"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-10 control-label" for="content"
        ><h4>Corps du post</h4></label
      >
      <div class="col-md-10">
        <textarea
          id="content"
          name="content"
          type="text"
          v-model="post.content"
          placeholder="Contenu de votre post"
          class="content"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="col-md-6 control-label" for="submitbutton"></label>
      <div class="col-md-6">
        <button v-on:click="create()" id="submitbutton" name="submitbutton">
          Partager mon post
        </button>
      </div>
    </div>
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
      },
    };
  },
  methods: {
    create() {
      axios
        .post("http://localhost:7070/api/post", this.post)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/allPosts");
        })
        .catch((e) => {
          this.errors.push(e);
        });
      // redirection vers la page d'affichage de tous les posts
    },
  },
};
</script>

<style scoped lang="scss">
.form-group {
  width: 100%;
  margin-bottom: 3%;
  margin-top: 5%;
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
</style>
