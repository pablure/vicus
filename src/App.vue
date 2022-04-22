<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'

</script>

<template>
  <nav class="text-right mr-7 text-white font-semibold">
    <router-link to="/">Inicio</router-link>&nbsp;
    <router-link to="/Register">Registro</router-link>&nbsp;
    <router-link to="/Login">Entrar</router-link>&nbsp;
    <!--<router-link to="/about">Landing page</router-link>-->
  </nav>
  <Header></Header>
  
  <router-view />
</template>

<style>
body{
  height: 100vh;
   /*background-color: aqua; */
   background: radial-gradient(rgb(188, 16, 240), rgb(119, 5, 153));
  }
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
