<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <ul class="nav-links">
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li><RouterLink to="/acerca-de">Acerca de</RouterLink></li>
          <li><RouterLink to="/precios">Precios</RouterLink></li>
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        </ul>
        <ul class="auth-links">
          <li><RouterLink to="/InicioSesion" class="highlighted">Iniciar Sesión</RouterLink></li>
          <li><RouterLink to="/registro" class="btn-green">Regístrate</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
}

.nav-links,
.auth-links {
  display: flex;
  list-style: none;
  gap: 16px;
  padding: 0;
  margin: 0;
}

.nav-links li a,
.auth-links li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease, transform 0.3s ease; /* Animación suave */
}

.nav-links li a:hover,
.auth-links li a:hover {
  color: #34A853; /* Cambia el color al pasar el mouse */
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
}

.auth-links .highlighted {
  color: #34A853;
  font-weight: bold;
}

.auth-links .btn-green {
  background-color: #34A853;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Animación suave */
}

.auth-links .btn-green:hover {
  background-color: #2c8c47; /* Cambia el color de fondo al pasar el mouse */
  transform: scale(1.05); /* Aumenta ligeramente el tamaño */
}
</style>