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
        <button class="update" @click="UpdateRestaurant(item.id)">Update</button>
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
      console.log(id);
      let result = await axios.delete(`https://resto-proj-default-rtdb.firebaseio.com/restaurant/${id}.json`);
      if ((result.status == 200))
       {
        this.loadRestaurant();
      }
    },
    UpdateRestaurant(id) {
      console.log(id);
      this.$router.replace('/update')
    },
    async loadRestaurant() {
      let user = localStorage.getItem("details");
      if (!user) {
        this.$router.push({ name: "HomePage" });
      }
      
    let result = await axios.get("https://resto-proj-default-rtdb.firebaseio.com/restaurant.json");
     let resto =  result.data;
     console.log(result.data);
     let arr= []
     for( let id in resto ){
  
       console.log(id);
       arr.push({
         id: id,
         name: resto[id].name,
         address: resto[id].address,
         contact: resto[id].contact

       });
     }
     console.log(arr);
     this.restaurants =arr;
    // console.log(this.restaurants);
   },
  },
  created() {
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