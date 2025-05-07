<template>
  <div class="navBar">
    <div class="search-bar">
      <input type="text" placeholder="Buscar..." />
      <img src="@/assets/Image/lupa.png" alt="Buscar" class="search-icon" />
    </div>
    <img src="../../../assets/Image/EstadoLimpioLogo.webp" alt="">
  </div>
  </template>
  <script setup lang="ts">
  // No se necesita lógica adicional por ahora
  </script>

  <style scoped>
  .navBar {
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    height: 10%;
    background-color: #ffffff; /* Color de fondo */
  }

  .search-bar {
    width: 30%; /* Más ancha */
    height: 50%; /* Mantiene el largo */
    background: #f7f7f7;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px; /* Borde redondeado */
    outline: 1px rgba(0, 0, 0, 0.35) solid;
    outline-offset: -1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    margin: 0 auto; /* Centra horizontalmente */
  }

  .search-bar input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 18px; /* Tamaño del texto */
    font-family: Inter, sans-serif;
    color: #333;
  }

  .search-bar .search-icon {
    width: 10px; /* Tamaño del ícono */
    height: 10px;
  }
  </style>
