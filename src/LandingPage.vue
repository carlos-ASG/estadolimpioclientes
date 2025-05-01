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

  <footer  class="footer-container">
    <div class="footer-grid">
      <div class="footer-column">
        <img class="brand-logo" src="" alt="Logo Estado Limpio">
        <div class="footer-description">
          <p class="copyright">Copyright © 2025 Estado Limpio.</p>
          <p class="rights">Todos los derechos reservados</p>
        </div>
      </div>

      <div class="footer-column">
        <h3 class="footer-link-title">Compañía</h3>
        <ul>
          <li><RouterLink to="/about" class="footer-link">About us</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Blog</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Contact us</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Pricing</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Testimonials</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-link-title">Contacto</h3>
        <ul>
          <li><a href="#" class="footer-link">Help center</a></li>
          <li><a href="#" class="footer-link">Terms of service</a></li>
          <li><a href="#" class="footer-link">Legal</a></li>
          <li><a href="#" class="footer-link">Privacy policy</a></li>
          <li><a href="#" class="footer-link">Status</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-link-title">Manténgase informado</h3>
        <div class="subscribe-box">
          <input type="email" placeholder="Introduce tu Correo" />
          <button>Subscribe</button>
          <div class="circle">

              <img  alt="Instagram" class="circle-image" />

          </div>
        </div>
      </div>
    </div>
  </footer>
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


<style scoped>

.footer-container {
  width: 100%;
  background: #263238;
  color: #F5F7FA;
  padding: 64px 20px;
  box-sizing: border-box;
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Cuadrícula de 4 columnas */
  gap: 40px; /* Espaciado entre columnas */
  max-width: 1200px; /* Limitar el ancho máximo */
  margin: 0 auto; /* Centrar la cuadrícula */
}

/* Footer Column */
.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinear todos los textos al inicio */
  gap: 16px; /* Espaciado uniforme entre elementos */
}

/* Primera columna: Logo y derechos reservados */
.footer-column:first-child {
  margin-right: 40px; /* Separar la primera columna del resto */
}

/* Footer Content */
.footer-content {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 64px 165px;
  background-color: #263238;
  gap: 125px;
}

/* Brand Section */
.brand-container {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
}

.brand-title {
  color: #34A853;
  font-size: 32px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 700;
  word-wrap: break-word;
}

.brand-title:last-child {
  color: black;
}

/* Logo */
.brand-logo {
  width: auto;
  height: auto;
  max-width: 100%;
  display: block;
  margin-top: 15px; /* Agregar margen superior para bajar el logo */
  margin-bottom: 10px; /* Mantener separación con el texto */
}

/* Footer Description */
.footer-description {
  font-size: 14px;
  line-height: 20px;
  text-align: left; /* Asegurar que el texto esté alineado a la izquierda */
}

.footer-description .copyright,
.footer-description .rights {
  color: #F5F7FA;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 20px;
  word-wrap: break-word;
}

/* Footer Links */
.footer-links {
  display: inline-flex;
  gap: 30px;
}

.footer-link-column {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
}

/* Footer Link Titles */
.footer-link-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px; /* Separar el título de los enlaces */
}

.footer-link {
  color: #F5F7FA;
  font-size: 14px;
  text-decoration: none;
  line-height: 20px;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Subscription Box */
.subscribe-box {
  display: flex;
  flex-direction: column;
  gap: 8px; /* Espaciado entre el input y el botón */
}

/* Subscription Box Input */
.subscribe-box input {
  width: 100%;
  max-width: 400px; /* Hacer la entrada más larga */
  height: 32px; /* Hacer la entrada más delgada */
  border-radius: 6px; /* Ajustar el borde redondeado */
  border: 1px solid #D9DBE1; /* Agregar un borde para mejor visibilidad */
  padding: 6px 10px; /* Ajustar el relleno interno */
  font-size: 14px; /* Tamaño de texto */
  box-sizing: border-box; /* Incluir padding y borde en el tamaño total */
}

.subscribe-box button {
  padding: 8px 16px;
  background: #34A853;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Email Label */
.email-label {
  color: #D9DBE1;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  line-height: 10px;
  word-wrap: break-word;
}

.circle {
  position: relative; /* Necesario para posicionar hijos con posición absoluta */
  width: 35px;
  height: 35px;
  background-color: #484C52;
  border-radius: 50%; /* Hace que el div sea un círculo */
  margin-top: 10px; /* Espaciado entre el botón y el círculo */
  display: flex;
  justify-content: center;
  align-items: center; /* Centrar contenido dentro del círculo */
  overflow: hidden; /* Asegurar que el contenido no sobresalga */
}

.circle a {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%; /* Asegurar que el enlace también sea circular */
  overflow: hidden; /* Ocultar cualquier contenido que sobresalga */
}

.circle img.circle-image {
  position: absolute; /* Posicionar la imagen de forma absoluta */
  top: 50%; /* Mover al 50% desde la parte superior */
  left: 50%; /* Mover al 50% desde la izquierda */
  transform: translate(-50%, -50%); /* Centrar la imagen exactamente en el medio */
  width: 70%; /* Ajustar el tamaño de la imagen dentro del círculo */
  height: 70%; /* Ajustar el tamaño de la imagen dentro del círculo */
  object-fit: cover; /* Asegura que la imagen se ajuste al círculo sin deformarse */
  border-radius: 50%; /* Mantiene la forma circular de la imagen */
}

/* Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr; /* Cambiar a 2 columnas en pantallas pequeñas */
    gap: 20px;
  }

  .footer-column {
    align-items: center; /* Centrar columnas en pantallas pequeñas */
    text-align: center;
  }
}

.footer-column {
  align-items: center;
  text-align: center;
}

</style>
