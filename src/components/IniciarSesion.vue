<template>
    <div>
      <h1>Inicio Sesion</h1>
      <form v-on:submit.prevent="iniciarSesion()" class="form">
          <input v-model="email" type="text" placeholder="Username" class="form-control"/>
          <input v-model="password" type="text" placeholder="password" class="form-control"/>
          <br>
          <button class="btn btn-info">Iniciar Sesion</button>
      </form>
    </div>
  </template>
  
  <script>
  import Global from '@/Global';
  import ServiceCubos from '@/services/service';
  const service=new ServiceCubos();
  export default {
      name:"inicioSesion",
      data(){
          return{
              user:{
                  email:"",
                  password:""
              },
              email:"",
              password:"",
  
          }
      },
      methods:{
          
          iniciarSesion(){
              this.user.email=this.email;
              this.user.password=this.password;
             service.iniciarSesion(this.user).then(response=>{
                  console.log(response);
                  console.log(response.response);
                  Global.token=response.response;
                  
              })
          }
      }
      
  }
  </script>
  
  <style>
  
  </style>