<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">

        <ul>
          <li><RouterLink to="/">Inicio</RouterLink> </li> <li><RouterLink to="/about">Acerca de</RouterLink> </li><li><RouterLink to="/precios">Precios</RouterLink> </li> <li> <RouterLink to="/contacto">Contacto</RouterLink></li>
        </ul>

        <ul>
          <li> <RouterLink to="/inicioSe" class="highlighted">Iniciar Sesión</RouterLink> </li><li><RouterLink to="/registro" class="btn-green">Regístrate</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />


</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: white;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  }

  .navbar ul {
    list-style: none;
    display: flex;
    gap: 25px;
    margin: 0;
    padding: 0;
  }

  .navbar a {
    text-decoration: none;
    color: #1d1d1f;
    font-weight: 500;
    position: relative;
  }

  /* Subrayado personalizado en "Iniciar" */
  .navbar .highlighted {
    color: #22c55e;
  }
  .navbar .highlighted::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #22c55e;
    border-radius: 2px;
  }

  /* Botón verde */
  .navbar .btn-green {
    background-color: #22c55e;
    color: white;
    padding: 8px 18px;
    border-radius: 999px;
    transition: background-color 0.3s ease;
  }
  .navbar .btn-green:hover {
    background-color: #16a34a;
  }
</style>

