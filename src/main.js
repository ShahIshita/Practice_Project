import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './routes'

const store = createStore({
   state(){
       return{};
   }
});

const app = createApp(App)

app.use(router)

app.use(store);
app.mount('#app');
