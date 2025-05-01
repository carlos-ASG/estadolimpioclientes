<script setup lang="ts">

</script>

<template>
<!-- Sección principal -->
<main class="landing">
    <section class="landing-content">
      <article class="landing-title">
        Estado Limpio es un sistema integral con la capacidad de gestionar recursos y monitoreo de los mismos
      </article>
      <article class="landing-description">
        <p><b>Nuestro objetivo es implementar un sistema integral que fusiona el seguimiento de la calidad del aire, apoyo y seguimiento, para optimizar la recolección de residuos urbanos.</b></p>
      </article>
    </section>

    <aside class="landing-aside">
      <img src="src/assets/image/boteBasura.png" alt="IMAGEN DE BOTE DE BASURA">
    </aside>
  </main>

  <!-- Sinergia -->
  <section class="sinergia-container">
    <div class="sinergia-section">
      <div class="sinergia-header">
        <h2>Hacemos sinergia con:</h2>
        <p>¿A quiénes vamos dirigidos?</p>
      </div>

      <div class="sinergia-cards">
        <div class="card">
          <div class="card-icon">
            <div class="icon-container">
              <img src="src/assets/Image/Ciudadanos.png" alt="Icono Ciudadanos">
            </div>
          </div>
          <div class="card-content">
            <h3>Ciudadanos</h3>
          </div>
          <p>Como usuarios finales del sistema</p>
        </div>

        <div class="card">
          <div class="card-icon">
            <div class="icon-container">
              <img src=" src/assets/Image/Gobiernos.png" alt="Icono Gobiernos">
            </div>
          </div>
          <div class="card-content">
            <h3>Gobiernos</h3>
          </div>
          <p>Como principal herramienta para gestionar los RSU en la población</p>
        </div>

        <div class="card">
          <div class="card-icon">
            <div class="icon-container">
              <img src="src/assets/Image/Organizaciones.png" alt="Icono Organizaciones">
            </div>
          </div>
          <div class="card-content">
            <h3>Organizaciones privadas</h3>
          </div>
          <p>Como sistema de gestión y control</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Estadísticas -->
  <section class="stats-section">
    <div class="stats-container">
      <div class="stats-text">
        <span class="highlight">Una nueva era en la recolección de residuos</span>
        <span class="secondary-text">por y para nuestra gente.</span>
        <p class="stats-subheading">Estamos aquí para mitigar el problema más importante</p>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">
            <div class="icon-box">
              <img src="src/assets/Image/User.png" alt="Icono Usuarios">
            </div>
          </div>
          <div class="stat-info">
            <span class="stat-value">2,245,341</span>
            <span class="stat-label">Usuarios</span>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <div class="icon-box">
              <img src="src/assets/image/Gvb.png" alt="Icono Gobiernos">
            </div>
          </div>
          <div class="stat-info">
            <span class="stat-value">46,328</span>
            <span class="stat-label">Gobiernos involucrados</span>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <div class="icon-box">
              <img src="src/assets/image/Recursos.png" alt="Icono Recursos">
            </div>
          </div>
          <div class="stat-info">
            <span class="stat-value">828,867</span>
            <span class="stat-label">Recursos Compartidos</span>
          </div>
        </div>

        <div class="stat-item">
          <div class="stat-icon">
            <div class="icon-box">
              <img src="src/assets/image/Card.png" alt="Icono Empresas">
            </div>
          </div>
          <div class="stat-info">
            <span class="stat-value">1,926,436</span>
            <span class="stat-label">Empresas Asociadas</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Información -->
  <section class="info-section">
    <div class="info-container">
      <img class="info-image" src="src/assets/image/reciclar.png" alt="Imagen de Estado Limpio">
      <div class="info-text">
        <h2 class="info-title">Estado Limpio</h2>
        <p class="info-description">
          Frente al creciente problema mundial de la basura, desarrollamos el <strong>primer sistema en México</strong> que permite una gestión avanzada, inteligente y sostenible de la recolección de residuos urbanos.
        </p>
        <p class="info-creator"><strong>Creado por alumnos del Instituto Tecnológico de Tepic</strong></p>
      </div>
    </div>
  </section>

  <footer  class="footer-container">
    <div class="footer-grid">
      <div class="footer-column">
        <img   class="brand-logo" src="/src/assets/Image/EstadoLimpioLogo.png" alt="Logo Estado Limpio">
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
          <li><RouterLink to="/about" class="footer-link">Help center</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Terms of service</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Legal</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Privacy policy</RouterLink></li>
          <li><RouterLink to="/about" class="footer-link">Status</RouterLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-link-title">Manténgase informado</h3>
        <div class="subscribe-box">
          <input type="email" placeholder="Introduce tu Correo" />
          <button >Suscripccion</button>
          <div class="circle">
            <a href="https://www.instagram.com/estadolimpio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
              <img src="/src/assets/Image/Social-Instagram.png"  alt="Instagram" class="circle-image" />
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>


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
