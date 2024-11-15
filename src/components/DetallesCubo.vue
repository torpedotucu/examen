<template>
  <div>
    <div>
    
    <div class="card" style="width: 18rem;">
        <img :src=cubo.imagen class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{cubo.nombre}}</h5>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Valoracion: {{cubo.valoracion}}</b> </li>
            <li class="list-group-item">{{cubo.precio}} € </li>
            <li class="list-group-item">{{cubo.modelo}} </li>
            <li class="list-group-item">{{cubo.color}} </li>
        </ul>
        <router-link to="/" class="btn btn-primary">Volver</router-link>
    </div>
    <hr>
    <h4>Comentarios</h4>
    <br>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="comentario in comentarios" :key="comentario">
            <div class="card text-center">
                <div class="card-header">
                  <b> User {{comentario.idUsuario}} comentó:</b>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        {{comentario.comentario}}
                    </h5>   
                </div>
                <div class="card-footer text-body-secondary">
                    {{comentario.fechaComentario}}
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

    name:"detallesCubo",
    mounted(){
        this.loadDetalles();
        this.loadComentarios();
    },methods:{
        loadDetalles(){
            let idCubo = this.$route.params.id;
            console.log(idCubo);
            service.loadDetallesCubo(idCubo).then(response=>{
                console.log(response);
                this.cubo=response;
            })
        },
        loadComentarios(){
            let idCubo = this.$route.params.id;
            service.loadComentarios(idCubo).then(response=>{
                this.comentarios=response;
            })
        }
    },
    data(){
        return{
            comentarios:[],
            cubo:[]
        }
    }
}
</script>

<style>

</style>