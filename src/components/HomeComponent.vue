<template>
  <div>
    <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
         
            <div class="col" v-for="cubo in cubos" :key="cubo">
                <div class="card" style="width: 18rem;">
                    <img :src=cubo.imagen class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">{{cubo.nombre}}</h5>
                     
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item"><b>Valoracion: {{cubo.valoracion}}</b> </li>
                      <li class="list-group-item">{{cubo.precio}} € </li>
                      
                    </ul>
                    <div class="card-body">
                       <router-link :to="/detallesCubo/+cubo.idCubo">Detalles</router-link>
                    </div>
                  </div>
              </div>
         
    </div>
</div>

  </div>
</template>

<script>
import ServiceCubos from '@/services/service';

const service=new ServiceCubos();
export default {
    name:"HomeComponent",
    data(){
        return{
            cubos:[]
        }
    },
    methods:{
        loadCubos(){
            service.loadCubos().then(response=>{
                this.cubos=response;
            }); 
        }
    },mounted(){
        this.loadCubos();
    }
}
</script>

<style>

</style>