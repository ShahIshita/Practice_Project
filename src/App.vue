<template>
<router-view />
  
</template>

<script>
// import SignUp from './components/SignUp.vue';
export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
body {
padding:0 ;
margin:0 ;
}
.logo {
  width: 100px;
}
.register input,.login input, .add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgb(229, 170, 252);
}
.register button, .login button, .add button {
  width: 320px;
  height: 40px;
  border: 1px solid rgb(229, 170, 252);
  color: #fff;
  background-color: rgb(229, 170, 252);
  cursor: pointer;
}
</style>
