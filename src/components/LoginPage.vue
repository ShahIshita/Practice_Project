<template>
  <img class="logo" src="../assets/resto-logo.png" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" placeholder="Enter email" v-model="email" />
    <input type="password" placeholder="Enter password" v-model="password" />
    <button @click="login">Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // localStorage.name = this.name;
      // localStorage.email = this.email;
      // localStorage.password = this.password;
      let result = await axios.get(
        `https://resto-proj-default-rtdb.firebaseio.com/details?email=${this.email}&password=${this.password}`
      );
      console.log(result);
      // if (result.status == 200 && result.data.length > 0) {
      // localStorage.setItem("details", JSON.stringify(result.data[0]));
      this.$router.push({ name: "HomePage" });
    },
  },
  // mounted() {
  //   if (localStorage.name) {
  //     this.name = localStorage.name;
  //   }
  //   if (localStorage.email) {
  //     this.email = localStorage.email;
  //   }
  //   if (localStorage.password) {
  //     this.password = localStorage.password;
  //   }
  // },
};
</script>

<style>
.logo {
  width: 100px;
}
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(229, 170, 252);
}
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid rgb(229, 170, 252);
  color: #fff;
  background-color: rgb(229, 170, 252);
  cursor: pointer;
}
</style>