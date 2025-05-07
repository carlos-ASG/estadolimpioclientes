<template>
    <div class="add-card">
      <span>+</span>
    </div>
  </template>

  <script setup lang="ts">
  // No se necesita lógica adicional por ahora
  </script>

  <style scoped>
  .add-card {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray; /* Cambiado a gris */
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .add-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
  </style>
