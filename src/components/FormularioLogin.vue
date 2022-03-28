<template>
  <div id="formulario" class="mt-5 border-2 w-80 h-60 rounded-lg shadow-2xl mx-auto bg-slate-100 z-10">
    <h1 class="my-4 font-semibold font-size ">Entra en VICUS</h1>
    <form action="#">
      <div class="text-left m-3">
        <label for="nombre">Login</label>
        <input type="text" id="nombre" name="nombre" value="" class="p-1 border-2 rounded-md ml-2 w-56" required autofocus/>
      </div>

      <div class="text-left m-3 mt-5">
        <label for="apellidos">Contraseña</label>
        <input type="password" id="apellidos" name="apellidos" value="" class="p-1 border-2 rounded-md ml-2" required/>
      </div>
      <input type="submit" name="boton" value="Entrar"  id="boton" class="bg-violet-600 p-3 text-white font-semibold mt-3 rounded-lg">
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioLogin",
};
</script>
