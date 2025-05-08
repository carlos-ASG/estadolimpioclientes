<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

// Estado para rastrear la ruta activa
const activeRoute = ref('');
const route = useRoute();

// Actualiza el estado cuando cambia la ruta
watch(
  () => route.path,
  (newPath) => {
    activeRoute.value = newPath;
  },
  { immediate: true }
);
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <ul class="nav-links">
          <li>
            <RouterLink
              to="/"
              :class="{ active: activeRoute === '/' }"
            >
              Inicio
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/acerca-de"
              :class="{ active: activeRoute === '/acerca-de' }"
            >
              Acerca de
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/precios"
              :class="{ active: activeRoute === '/precios' }"
            >
              Precios
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/contacto"
              :class="{ active: activeRoute === '/contacto' }"
            >
              Contacto
            </RouterLink>
          </li>
        </ul>
        <ul class="auth-links">
          <li>
            <RouterLink
              to="/InicioSesion"
              :class="{ 'btn-green': activeRoute === '/InicioSesion', 'bouncy': activeRoute === '/InicioSesion' }"
            >
              Iniciar Sesión
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/registro"
              :class="{ 'btn-green': activeRoute === '/registro', 'bouncy': activeRoute === '/registro' }"
            >
              Regístrate
            </RouterLink>
          </li>
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
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-links li a:hover,
.auth-links li a:hover {
  color: #34A853;
  transform: scale(1.05);
}

/* Estilo para la ruta activa */
.nav-links li a.active,
.auth-links li a.active {
  color: #34A853;
  font-weight: bold;
  transform: scale(1.1);
}

/* Estilo específico para "Iniciar Sesión" */
.auth-links .btn-green {
  background-color: #34A853;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.auth-links .btn-green:hover {
  background-color: #ffffff;
  transform: scale(1.1);
}

/* Animación bouncy */
@keyframes bouncy {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.auth-links .bouncy {
  animation: bouncy 0.5s ease-in-out;
}
</style>