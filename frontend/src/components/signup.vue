<template>
  <div id="signup">
    <img class="logo" alt="logo-responsive" src="../assets/icon.png" />
    <img class="Logo" alt="Vue logo" src="../assets/icon-left-font.png" />
    <h1>Merci de bien vouloir renseigner les champs ci-dessous pour vous inscrire</h1>
    <div class="form">
      <div class="form-group">
        <label class="col-md-4 control-label" for="email">E-mail</label>
        <div class="col-md-8">
          <input
            id="mail"
            type="text"
            placeholder="ex:Bertrand@groupomania.com"
            v-model="user.email"
          />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="pseudo">Pseudo</label>
        <div class="col-md-8">
          <input id="pseudo" type="text" placeholder="ex:Bertrand" v-model="user.pseudo" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="password">Mot de Passe</label>
        <div class="col-md-8">
          <input id="mdp" type="password" placeholder="min 5 caractères" v-model="user.password" />
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4 control-label" for="submitbutton"></label>
        <div class="col-md-4">
          <button v-on:click="signUp()" id="submitbutton" name="submitbutton">Créer un compte</button>
        </div>
      </div>
    </div>
    <footer>
      <img class="img-footer" alt="Vue logo" src="../assets/icon-white-footer.png" />
    </footer>
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
        password: ""
      }
    };
  },
  methods: {
    signUp() {
      axios
        .post("http://localhost:7070/signup", this.user)
        .then(response => {})
        .catch(error =>
          res.status(500).json({
            error
          })
        );
      this.$router.push("/login"); // redirection vers la page login
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#signup {
  margin-bottom: 20%;
}
.logo {
  width: 0%;
}
.form-group {
  width: 100%;
  justify-content: center;
  display: inline-flex;
  margin-bottom: 3%;
  font-family: "Jura", sans-serif;
  font-size: 1.3rem;
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
  }
}
label {
  display: inline-block;
}
#submitbutton {
  width: 80%;
  justify-content: center;
  height: 45px;
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
  #signup {
    .Logo {
      display: none;
    }
    .logo {
      width: 20%;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    h1 {
      margin-bottom: 5%;
    }
  }
}
/* Site responsive pour petits écrans*/
@media all and (max-width: 700px) {
  #signup {
    margin-bottom: 60%;
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
    }
  }
}
/* Affichage site Grands ecrans 4K*/
@media all and (min-width: 1500px) and (max-width: 2300px) {
  #signup {
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
