<template>
  <!--<h1>Home</h1>-->
  <div id="formulario" class="border-2 w-80 h-60 rounded-lg shadow-2xl mx-auto bg-slate-100">
    <h1 class="my-4 font-semibold">Entrar en VICUS</h1>
    <form action="#">
      <div class="elemento-formulario">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value="" class="border-2 rounded-md ml-2" required/>
      </div>

      <div class="elemento-formulario">
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" value="" required/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
