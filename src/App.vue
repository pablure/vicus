<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="text-right mr-5 text-white font-semibold">
    <router-link class=""  to="/home">Home</router-link>&nbsp;
    <router-link to="/about">Landing page</router-link>
  </nav>
  <router-view />
</template>

<style>
body{
  height: 100vh;
   /*background-color: aqua; */
   background: radial-gradient(rgb(188, 16, 240), rgb(145, 7, 187));
  }
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
