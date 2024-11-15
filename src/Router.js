import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import DetallesCubo from "./components/DetallesCubo.vue";
import IniciarSesion from "./components/IniciarSesion.vue";
import MarcasComponent from "./components/MarcasComponent.vue";

const myRoutes = [
    {
        path: '/', component: HomeComponent
    },
    { 
        path: "/detallesCubo/:id", component: DetallesCubo
     },
     {
        path:"/iniciarSesion",component:IniciarSesion
     },
     {
        path:"/marcas/:marca",component:MarcasComponent
     }
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})
export default router;