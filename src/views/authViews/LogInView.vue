<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';

</script>
<template>

  <NavbarComponent />
  <main class="inicio-sesion-container">
  <!-- Sección de contenido principal -->
  <section class="content">
    <article class="title">
      Ingresa para hacer el cambio
    </article>

    <article class="description">
      Si no tienes una cuenta, <b><RouterLink to="/registro">regístrate aquí</RouterLink></b>
    </article>

    <img src="../../assets/Image/boteBasura.webp" alt="Bote de basura" class="image-main">
  </section>

  <!-- Formulario de inicio de sesión -->
  <aside class="form-container">
    <form class="form" method="POST" action="">
      <img src="../../assets/Image/EstadoLimpioLogo.webp" alt="Logo Estado Limpio" class="logo">

      <!-- Campos del formulario -->
      <div class="form-group">
        <input type="text" id="username" name="username" placeholder="Ingresa tu email" required>
      </div>

      <div class="form-group">
        <input type="password" id="password" name="password" placeholder="Ingresa tu contraseña" required>
      </div>
      <RouterLink to="/dashboard"> <button type="submit" class="btn-submit"> Ingresar </button> </RouterLink>
    </form>
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
    justify-content: space-between;
    align-items: flex-start;
    padding: 5% 10%;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* Sección de contenido principal */
  .content {
    display: table-column;
    text-align: center;
    align-items: center;
    max-width:40%;
    padding-bottom: 70px;
  }

  .title {
    font-size: 58px;
    line-height: 77px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #000000;

  }

  .description {
    font-size: 23px;
    line-height: 27px;
    margin-bottom: 20px;
    color: #000000;


  }

  .link-registro {
    color: #28B446;
    text-decoration: none;
  }

  .link-registro:hover {
    text-decoration: underline;
  }

  .image-main {
    width: 100%;
    max-width: 200px; /* Ajusta el tamaño de la imagen */
    margin-top: 70px;
    padding-right: 20%;
  }

  /* Contenedor del formulario */
  .form-container {
    display: flex;
    flex-direction: column;
    max-width:370.69px;
    width: 100%;
  }

  .form {
    width: 100%;
    justify-items: center;
  }

  .logo {
    display: block;
    margin: 0 auto 48px;
    max-width: 100%;
  }

  .form-group {
    margin-bottom: 48px;
  }

  .form-group ::placeholder {
    font-family: 'SF Pro Display';
    display: block;
    font-size: 15px;
    margin-bottom: 5px;
    color: #8391A1;
  }

  .form-group input {
    width: 370px;
    height: 30px;
    padding: 12px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .btn-submit {
    width: max-content;
    padding: 12px;
    background-color: #34A853;
    color: white;
    font-size: 1.2em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .btn-submit:hover {
    background-color: #2c8e42;
  }

</style>
