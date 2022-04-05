<template>
  <headerpage />
  <h1>Hello, Welcome!!!</h1>
  <table border="1" class="table">
    <tr class="ctr">
      <td>Id</td>
      <td>Name</td>
      <td>Address</td>
      <td>Contact</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.address }}</td>
      <td>{{ item.contact }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button class="delete" @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import Headerpage from "./HeaderPage.vue";
export default {
  name: "HomePage",
  data() {
    return {
      restaurants: [],
    };
  },
  components: {
    Headerpage,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if ((result.status == 200))
       {
        this.loadRestaurant();
      }
    },
    async loadRestaurant() {
      let user = localStorage.getItem("details");
      if (!user) {
        this.$router.push({ name: "HomePage" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");
      this.restaurants = result.data;
    },
  },
  mounted() {
    this.loadRestaurant();
  },
};
</script>

<style>
.table {
  margin-left: 350px;
  background-color:  rgb(238, 226, 243);
  /* background-color: rgb(206, 230, 247); */
  color: black;
}
.ctr {
  background-color: rgb(188, 127, 214);
  color: black;
}
td {
  width: 160px;
  height: 40px;
}
.delete {
  margin-left: 150px;
  margin-bottom: -85px;
}
</style>