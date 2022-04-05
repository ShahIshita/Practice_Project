<template>
  <headerpage />
  <h1>Hello , Welcome on Update Restaurant..</h1>
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
    <button type="button" @click="updateRestaurant">Update New Restaurant</button>
  </form>
</template>

<script>
import Headerpage from "./HeaderPage.vue";
import axios from 'axios';
export default {
  name: "UpdateRestaurant",
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
   async updateRestaurant() {
      console.log("function called", this.restaurant);
       const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
        name:this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      if(result.status==200)
      {
        this.$router.push({name:'HomePage'});
      }

    }
  },
 async mounted() {
    let user = localStorage.getItem("details");
    if (!user) {
      this.$router.push({ name: "UpdateRestaurant" });
    }
    const result =await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id) ;
    //console.log(this.$route.params.id)
   // console.log(result.data);
    this.restaurant = result.data
  },
};
</script>