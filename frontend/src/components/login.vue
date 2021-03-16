<template>
  <div class="login">
    <img class="logo" alt="logo-responsive" src="../assets/icon.png" />
    <img class="Logo" alt="Vue logo" src="../assets/icon-left-font.png" />
    <h1>Merci de bien vouloir renseigner les champs ci-dessous</h1>
    <div class="form">
      <div class="form-group">
        <label class="col-md-4 control-label" for="email">E-mail</label>
        <div class="col-md-8">
          <input id="mail" type="text" v-model="login.login" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="password"
          >Mot de Passe</label
        >
        <div class="col-md-8">
          <input id="mdp" type="password" v-model="login.password" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="submitbutton"></label>
        <div class="col-md-4">
          <button v-on:click="logUser()" id="submitbutton" name="submitbutton">
            Se connecter
          </button>
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
const axios = require("axios").default;
export default {
  name: "login",
  data() {
    return {
      login: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    logUser() {
      axios
        .post("http://localhost:7070/login", this.login)
        .then((response) => {
          let newToken = response.data.token;
          localStorage.setItem("authToken", newToken);
          localStorage.setItem("userPseudo", response.data.userPseudo);
          localStorage.setItem("userId", response.data.userId);
          console.log(newToken);
          axios.defaults.headers["Authorization"] = "Bearer " + newToken;
          this.$router.push("/allPosts");
        })
        .catch(() => {
          this.message.push({
            message:
              "Vous ne pouvez pas vous connecter, Avez vous créer un compte utilisateur?",
          });
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  width: 0%;
}
.form-group {
  width: 100%;
  justify-content: center;
  display: inline-flex;
  margin-bottom: 3%;
  font-family: "Jura", sans-serif;
  font-size: 20px;
  font-weight: bold;
  input {
    width: 80%;
    height: 50px;
    font-family: "Jura", sans-serif;
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
  width: 80%;
  height: 40px;
  font-family: "Jura", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #1f3150;
  border: 2px solid #d1515a;
  border-radius: 1rem;
}
h1 {
  font-size: 30px;
  margin-bottom: 2%;
  font-family: "Prompt", sans-serif;
}
ul {
  display: inline-flexbox;
  list-style-type: none;
  margin-bottom: 3%;
  li {
    font-size: 20px;
    font-family: "Jura", sans-serif;
  }
}
footer {
  width: 100%;
  height: 200px;
  position: fixed;
  bottom: 0;
  background-color: #1f3150;

  .img-footer {
    height: 100%;
  }
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 1024px) {
  .login {
    .Logo {
      display: none;
    }
    .logo {
      width: 20%;
      margin-bottom: 0%;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    h1 {
      margin-bottom: 5%;
    }
  }
}
/* Site responsive tablettes/smartphones*/
@media all and (max-width: 800px) {
  .login {
    margin-bottom: 65%;
    .logo {
      width: 30%;
    }
    h1 {
      width: 80%;
      text-align: center;
      margin: auto;
      font-size: 20px;
      margin-bottom: 8%;
    }
    .form-group {
      font-size: 17px;
      display: flex;
      flex-flow: column;
      input {
        margin-left: 0;
      }
    }
  }
}
/* Affichage site Grands ecrans 4K*/
@media all and (min-width: 1500px) and (max-width: 2300px) {
  .login {
    h1 {
      font-size: 3.2rem;
    }
    label {
      font-size: 2.6rem;
    }
    input {
      width: 70%;
      height: 80px;
      font-size: 2.6rem;
    }
    #submitbutton {
      height: 100px;
      font-size: 2.4rem;
    }
  }
}
</style>
