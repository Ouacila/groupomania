<template>
  <div class="login">
    <img alt="Groupomania logo" src="../assets/icon-left-font.png" />
    <h1>Merci de bien vouloir renseigner les champs ci-dessous</h1>
    <div class="form">
      <div class="form-group">
        <label class="col-md-4 control-label" for="email">E-mail</label>
        <div class="col-md-4">
          <input id="mail" type="text" v-model="login.login" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="password">Mot de Passe</label>
        <div class="col-md-4">
          <input id="mdp" type="password" v-model="login.password" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="submitbutton"></label>
        <div class="col-md-4">
          <button v-on:click="logUser()" id="submitbutton" name="submitbutton">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "login",
  data() {
    return {
      login: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    logUser() {
      axios
        .post("http://localhost:7070/login", this.login)
        .then(response => {
          let newToken = response.data.token;
          console.log(newToken);
          axios.defaults.headers["Authorization"] = "Bearer " + newToken;
          this.$router.push("/allPosts");
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
    margin-left: 15%;
  }
}
label {
  display: inline;
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
