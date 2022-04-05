<template>
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" placeholder="Enter name" v-model="name" />
    <input type="text" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signUp() {
      console.log("signUp", this.name, this.email, this.password);
      localStorage.name = this.name;
      localStorage.email = this.email;
      localStorage.password = this.password;
      // console.log('now pretend I did more stuff...');
  
  
      let result = await axios.post("https://resto-proj-default-rtdb.firebaseio.com/details.json", {
        name: this.name,
        email: this.email,
        password: this.password,
      
      });
      console.log(result);
      // if (result.status == 200) {
      //   localStorage.setItem("details", JSON.stringify(result.data));
        this.$router.push({ name: "LoginPage" });
      // }
    },
  },
   mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.password) {
      this.password = localStorage.password;
    }
  },
};
  
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(229, 170, 252);
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid rgb(229, 170, 252);
  color: #fff;
  background-color: rgb(229, 170, 252);
  cursor: pointer;
}
</style>