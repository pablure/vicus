<template>
  <div id="formulario" class="mt-5 border-2 w-80 h-98 rounded-lg shadow-2xl mx-auto bg-slate-100 opacity-95">
    <h1 class="my-4 font-semibold font-size ">Registrate en VICUS</h1>
    <form action="#" method="post" class="text-left m-5">
      <div class="">
        <label for="nombre">Nombre</label><br>
        <input type="text" id="nombre" name="nombre" value="" class="border-2 rounded-md w-64" required autofocus/>
      </div>
      <div class="">
        <label for="apellidos">Apellidos</label><br>
        <input type="text" id="apellidos" name="apellidos" value="" class="border-2 rounded-md w-64" required autofocus/>
      </div>
      <div class="">
        <label for="login">Login</label><br>
        <input type="text" id="login" name="login" value="" class="border-2 rounded-md w-64" required autofocus/>
      </div>
      <div class="">
        <label for="apellidos">Contraseña</label><br>
        <input type="password" id="apellidos" name="apellidos" value="" class="border-2 rounded-md w-64" required/>
      </div>
      <div class="">
        <label for="apellidos">Contraseña</label><br>
        <input type="password" id="apellidos" name="apellidos" value="" class="border-2 rounded-md w-64" required/>
      </div>
      <input type="submit" name="boton" value="Registrar"  id="boton" class="bg-violet-600 p-3 text-white font-semibold mt-2 mb-2 rounded-lg">
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "FormularioRegistro",
};
</script>