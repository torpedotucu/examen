<template>
  <div>
    
<div>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Expand at sm</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03"
                aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page">Home</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" >Registrarse</a>
                    </li>
                    
                    
                    
                        <li class="nav-item">
                            <a class="nav-link">Cerrar Sesion</a>
                        </li>
                    
                   
                        <li class="nav-item">
                            <router-link to="/iniciarsesion" class="nav-link" >Iniciar Sesion</router-link>
                        </li>
                    
                    <!--marcas-->
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Marcas</a>
                        <ul class="dropdown-menu" >
                           
                                <li class="list-item" v-for="marca in marcas" :key="marca">
                                    <router-link :to="/marcas/+marca">{{ marca }}</router-link>
                                </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

  </div>
</template>

<script>
import ServiceCubos from '@/services/service';

const service=new ServiceCubos();
export default {

    name:"menuComponent"
    ,data(){
        return{
            marcas:[]
        }
    },
    methods:{
        loadMarcas(){
            service.loadMarcas().then(response=>{
                this.marcas=response;
            })
        }
    },
    mounted(){
        this.loadMarcas()
    }
}
</script>

<style>

</style>