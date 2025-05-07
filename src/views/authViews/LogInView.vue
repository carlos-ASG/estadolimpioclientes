<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>

<template>
  <NavbarComponent />
  <main class="inicio-sesion-container">
    <!-- Formulario de inicio de sesión dentro de una tarjeta -->
    <aside class="form-card">
      <form class="form" method="POST" action="">
        <img src="../../assets/Image/EstadoLimpioLogo.webp" alt="Logo Estado Limpio" class="logo">

        <!-- Campos del formulario -->
        <div class="form-group">
          <input type="text" id="username" name="username" placeholder="Ingresa tu email" required>
        </div>

        <div class="form-group">
          <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
        </div>

        <RouterLink to="/dashboard">
          <button type="submit" class="btn-submit">Ingresar</button>
        </RouterLink>
      </form>

      <!-- Texto centrado -->
      <p class="register-text">
        Si no tienes una cuenta, <b><RouterLink to="/registro">regístrate aquí</RouterLink></b>
      </p>
    </aside>
  </main>
</template>

<style scoped>
/* Estilo general de la página */
body {
  margin: 0;
  font-family: 'SF Pro Display', sans-serif;
  background-color: #F5F7FA;
}

/* Contenedor principal de inicio de sesión */
.inicio-sesion-container {
  display: flex;
  justify-content: center; /* Centra horizontalmente */
  align-items: center; /* Centra verticalmente */
  height: 100vh; /* Ocupa toda la altura de la ventana */
  padding: 0 20px; /* Espaciado lateral */
  background-color: #f5f7fa;
}

/* Tarjeta del formulario */
.form-card {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 40px;
  align-items: center;
  text-align: center;
}

.form {
  width: 100%;
}

.logo {
  display: block;
  margin: 0 auto 48px;
  max-width: 100%;
}

.form-group {
  margin-bottom: 24px;
}

.form-group input {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #34A853;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #2c8e42;
}

/* Texto de registro */
.register-text {
  margin-top: 20px;
  font-size: 14px;
  color: #6a707c;
}
</style>