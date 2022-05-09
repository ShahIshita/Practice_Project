import HomePage from './components/HomePage.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import AddRestaurant from './components/AddRestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
       path: '/',
       redirect : '/sign-up'

    },
    {
        name: "HomePage",
        component:HomePage,
        path: '/home'
    },
    {
        name: "SignUp",
        component:SignUp,
        path: '/sign-up' 
    },
    {
        name: "LoginPage",
        component:LoginPage,
        path: '/login' 
    },
    {
        name: "AddRestaurant",
        component:AddRestaurant,
        path: '/add' 
    },
    {
        name: "UpdateRestaurant",
        component:UpdateRestaurant,
        path: '/update' 
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
