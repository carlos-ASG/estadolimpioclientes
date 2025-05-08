<template>
  <div class="navBar">
    <div class="search-bar">
      <input type="text" placeholder="Buscar..." />
      <img src="@/assets/icons/lupa.webp" alt="Buscar" class="search-icon" />
    </div>
    <img src="../../../assets/icons/EstadoLimpioContainer.webp" alt="" class="navBar-image" />
  </div>
</template>

<script setup lang="ts">
  // No se necesita lógica adicional por ahora
</script>

<style scoped>
.navBar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start; /* Asegura que los elementos estén alineados a la izquierda */
  width: 100%;
  height: 10vh; /* Convertido a altura proporcional de la ventana */
  background-color: #ffffff; /* Color de fondo */
  padding: 2% 1.2%;
}

.search-bar {
  width: 35%;
  height: 20%;
  background: #f7f7f7;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px; /* Borde redondeado */
  outline: 1px rgba(0, 0, 0, 0.35) solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8% 1.2%;
  margin: 0; /* Elimina el centrado automático */
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 2vw; /* Mantén el tamaño del texto */
  font-family: Inter, sans-serif;
  color: #333;
}

.search-bar .search-icon {
  width: 1.5vw; /* Mantén el tamaño del ícono */
  height: auto; /* Mantén la proporción */
}

.navBar-image {
  width: 23%; /* Igual al ancho de .search-bar */
  height: auto; /* Mantén la proporción de la imagen */
  border-radius: 8px; /* Añadir borde redondeado a la imagen */
  margin-left: auto; /* Mueve la imagen hacia la derecha */
}
</style>
