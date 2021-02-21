<template>
  <div id="signup">
    <img alt="Groupomania logo" src="../assets/icon-left-font.png" />
    <h1>
      Merci de bien vouloir renseigner les champs ci-dessous pour vous inscrire
    </h1>
    <div class="form">
      <div class="form-group">
        <label class="col-md-4 control-label" for="email">E-mail</label>
        <div class="col-md-4">
          <input id="mail" type="text" v-model="user.email" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="pseudo">Pseudo</label>
        <div class="col-md-4">
          <input id="pseudo" type="text" v-model="user.pseudo" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="password"
          >Mot de Passe</label
        >
        <div class="col-md-4">
          <input id="mdp" type="password" v-model="user.password" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="submitbutton"></label>
        <div class="col-md-4">
          <button v-on:click="signUp()" id="submitbutton" name="submitbutton">
            Créer un compte
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
import axios from "axios";

export default {
  name: "signup",
  data() {
    return {
      user: {
        email: "",
        pseudo: "",
        password: "",
      },
    };
  },
  methods: {
    signUp() {
      axios
        .post("http://localhost:7070/signup", this.user)
        .then((response) => {})
        .catch((error) =>
          res.status(500).json({
            error,
          })
        );
      this.$router.push("/login"); // redirection vers la page login
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
template {
  width: 100%;
}
.form-group {
  width: 100%;
  justify-content: center;
  display: inline-flex;
  margin-bottom: 3%;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  font-weight: bold;
  input {
    width: 80%;
    height: 50px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid #d1515a;
    border-radius: 1rem;
  }
}
label {
  display: inline-block;
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
h1 {
  font-size: 30px;
  margin-bottom: 2%;
}
ul {
  display: inline-flexbox;
  list-style-type: none;
  margin-bottom: 3%;
  li {
    font-size: 20px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }
}
</style>
