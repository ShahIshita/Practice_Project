<template>
  <headerpage />
  <h1>Hello , Welcome on Add Restaurant..</h1>
  <form class="add">
    <input
      type="text"
      placeholder="Enter Restaurant name"
      name="name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      placeholder="Enter address"
      name="address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      placeholder="Enter contact"
      name="contact"
      v-model="restaurant.contact"
    />
    <button type="button" @click="addRestaurant">Add New Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios';
import Headerpage from "./HeaderPage.vue";
export default {
  name: "AddRestaurant",
  components: {
    Headerpage,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
  async  addRestaurant() {
      console.log(this.restaurant);
      const result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if(result.status==201)
      {
        this.$router.push({name:'HomePage'});
      }
      console.log("result", result);
    },
  },
  mounted() {
    let user = localStorage.getItem("details");
    if (!user) {
      this.$router.push({ name: "AddRestaurant" });
    }
  },
};
</script>