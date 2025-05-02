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
      <img src="/src/assets/Image/boteBasura.png" alt="IMAGEN DE BOTE DE BASURA">
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
              <img src="/src/assets/Image/Ciudadanos.png" alt="Icono Ciudadanos">
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
              <img src="/src/assets/Image/Gvb.png" alt="Icono Gobiernos">
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
              <img src="/src/assets/Image/Organizaciones.png" alt="Icono Organizaciones">
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
              <img src="/src/assets/Image/User.png" alt="Icono Usuarios">
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
              <img src="/src/assets/image/Gvb.png" alt="Icono Gobiernos">
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
              <img src="/src/assets/image/Recursos.png" alt="Icono Recursos">
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
              <img src="/src/assets/image/Card.png" alt="Icono Empresas">
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
      <img class="info-image" src="/src/assets/image/reciclar.png" alt="Imagen de Estado Limpio">
      <div class="info-text">
        <h2 class="info-title">Estado Limpio</h2>
        <p class="info-description">
          Frente al creciente problema mundial de la basura, desarrollamos el <strong>primer sistema en México</strong> que permite una gestión avanzada, inteligente y sostenible de la recolección de residuos urbanos.
        </p>
        <p class="info-creator"><strong>Creado por alumnos del Instituto Tecnológico de Tepic</strong></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Container */
.section-container {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 78px;
    width: 100%;
    height: 100%;
    padding-left: 144px;
    padding-right: 144px;
    padding-top: 32px;
    padding-bottom: 32px;
    background-color: #F5F7FA;
  }

  /* Section Image */
  .section-image {
    width: 203px;
    height: 212px;
  }

  /* Text Container */
  .text-container {
    flex: 1 1 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
  }

  /* Title Container */
  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
  }

  /* Title */
  .title {
    color: #34A853;
    font-size: 40px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 700;
    line-height: 24px;
    word-wrap: break-word;
    text-align: center;
    width: 100%;
  }

  /* Description Container */
  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
  }

  /* Description */
  .description {
    color: #484C52;
    font-size: 20px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
    line-height: 28px;
    word-wrap: break-word;
    text-align: center;
    width: 100%;
  }

  /* Creator Text */
  .creator {
    color: #89939E;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 24px;
    word-wrap: break-word;
    text-align: center;
    width: 100%;
  }

  .info-section {
    display: flex;
    justify-content: center; /* Centra la sección horizontalmente */
    padding: 32px 0; /* Espaciado superior e inferior */
    background-color: #ffffff; /* Opcional: color de fondo */
  }

  .info-container {
    display: flex;
    flex-wrap: wrap; /* Permite que los elementos se ajusten en varias filas si es necesario */
    align-items: center;
    gap: 20px; /* Espaciado entre la imagen y el texto */
    max-width: 1200px; /* Ancho máximo para alinear con otras secciones */
    margin: 0 auto; /* Centra el contenedor horizontalmente */
    padding: 20px; /* Espaciado interno */
  }

  .info-image {
    max-width: 150px; /* Reduce el tamaño máximo de la imagen */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 10px; /* Bordes redondeados */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
  }

  .info-text {
    flex: 1; /* Permite que el texto ocupe el espacio restante */
  }

  .info-title {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .info-description,
  .info-creator {
    font-size: 1rem;
    line-height: 1.5;
    font-style: bold;
    color: #000000;
  }

  .info-creator {
    font-weight: bold; /* Asegura que el texto se muestre en negritas */
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 768px) {
    .info-container {
      flex-direction: column; /* Cambia a diseño vertical en pantallas pequeñas */
      text-align: center; /* Centra el texto */
    }

    .info-image {
      max-width: 120px; /* Reduce aún más el tamaño de la imagen en pantallas pequeñas */
    }

    .info-title {
      font-size: 1.5rem; /* Ajusta el tamaño del título */
    }

    .info-description,
    .info-creator {
      font-size: 0.9rem; /* Reduce el tamaño del texto */
    }
  }
</style>

<style scoped>
/* Container */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  /* Text Content */
  .text-content {
    text-align: center;
    margin-bottom: 30px;
  }

  .main-heading {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .highlight {
    color: #4caf50;
  }

  .subheading {
    font-size: 18px;
    color: #666;
  }

  /* Stats Section */
  .stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajusta el número de columnas automáticamente */
    gap: 20px; /* Espaciado entre los elementos */
    margin: 20px 0;
  }

  .stats-row {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .stat-card {
    background: #FFFFFF;
    border: 2px solid #F4EDED;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
  }

  .stat-label {
    font-size: 1rem;
    color: #666;
  }

  .stats-container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Divide el contenedor en dos columnas */
    gap: 40px; /* Espaciado entre las columnas */
    align-items: center; /* Alinea verticalmente el contenido */
    padding: 64px 16px;
    background: #ffffff;
    max-width: 1200px;
    margin: 0 auto;
  }

  .stats-text {
    grid-column: 1; /* Coloca el texto en la primera columna */
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .stats-heading {
    font-size: 36px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 700;
    line-height: 44px;
    color: #34A853;
  }

  .stats-heading span:last-child {
    color: #4D4D4D;
  }

  .stats-subheading {
    font-size: 16px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
    line-height: 24px;
    color: #18191F;
  }

  .stats-cards {
    display: flex;
    flex-wrap: wrap; /* Permite que las tarjetas se ajusten en varias filas */
    gap: 30px; /* Espaciado entre las tarjetas */
    justify-content: center; /* Centra las tarjetas horizontalmente */
    width: 100%;
  }

  .stat-item {
    background-color: #ffffff; /* Fondo claro */
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra para destacar */
    transition: transform 0.3s ease;
  }

  .stat-item:hover {
    transform: scale(1.05); /* Efecto de zoom al pasar el mouse */
  }

  .stat-info {
    display: flex;
    flex-direction: column;
  }

  .stats-grid .stat-item .stat-icon img {
    width: 50px; /* Ajusta el tamaño según lo que necesites */
    height: auto; /* Mantiene la proporción de la imagen */
  }

  .stat-icon .icon-box img {
    max-width: 80px;
    height: auto;
    margin-bottom: 10px;
  }

  .stat-item:nth-child(2) {
    order: 4; /* Mover "Gobiernos" al último lugar */
  }

  .stat-item:nth-child(4) {
    order: 2; /* Mover "Empresas" al segundo lugar */
  }

  @media (max-width: 768px) {
    .stats-container {
      grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
      padding: 32px 16px; /* Reduce el espaciado interno */
    }

    .stats-grid {
      grid-template-columns: 1fr; /* Las tarjetas ocupan todo el ancho */
    }

    .stat-item {
      flex: 1 1 calc(50% - 20px); /* Cambiar a dos columnas en tablets */
      max-width: 100%; /* Asegura que las tarjetas ocupen todo el ancho disponible */
      padding: 15px;
    }

    .stat-value {
      font-size: 1.2rem;
    }

    .stat-label {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .stat-item {
      flex: 1 1 100%; /* Cambiar a una columna en móviles */
    }
  }

  /* Estilo para el texto "Una nueva era en la recolección de residuos" */
  .stats-text .highlight {
    color: #34A853;
    font-size: 36px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 700;
    line-height: 44px;
    word-wrap: break-word;
  }

  /* Estilo para el texto "por y para nuestra gente." */
  .stats-text span:last-child {
    color: #4D4D4D;
    font-size: 36px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 700;
    line-height: 44px;
    word-wrap: break-word;
  }

  /* Estilo para "Estamos aquí para mitigar el problema más importante" */
  .stats-subheading {
    font-size: 16px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
    line-height: 24px;
    color: #18191F;
  }

  /* Estilo para "por y para nuestra gente." */
  .stats-text .secondary-text {
    color: #4D4D4D;
    font-size: 36px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 700;
    line-height: 44px;
    word-wrap: break-word;
  }
</style>

<style scoped>
/* Reglas generales para sinergia */
.sinergia-section {
    width: 100%; /* Cambiar de ancho fijo a ancho completo */
    max-width: 1200px; /* Limitar el ancho máximo */
    padding: 48px 16px; /* Reducir el padding para pantallas pequeñas */
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0 auto;
    /* Centra la sección horizontalmente */
  }

  .sinergia-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    text-align: center;
  }

  .sinergia-header h2 {
    color: #4D4D4D;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
  }

  .sinergia-header p {
    color: #717171;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .sinergia-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px; /* Espaciado entre las tarjetas */
  }

  .sinergia-cards .card:nth-child(2) {
    order: 3; /* Mover la tarjeta "Gobiernos" al tercer lugar */
  }

  .sinergia-cards .card:nth-child(3) {
    order: 2; /* Mover la tarjeta "Organizaciones privadas" al segundo lugar */
  }

  .card {
    flex: 1 1 calc(33.33% - 20px); /* Cada tarjeta ocupa un tercio del ancho */
    min-width: 250px; /* Asegurar un ancho mínimo */
    padding: 24px 16px; /* Reducir el padding interno */
    background: white;
    box-shadow: 0px 2px 4px rgba(171, 190, 209, 0.2);
    border: 2px solid #F4EDED;
    /* Borde de color #F4EDED */
    border-radius: 18px;
    /* Bordes redondeados */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    text-align: center;
  }

  .card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .card-content h3 {
    margin-bottom: 5px;
    /* Reduce el espacio debajo del título */
    margin-top: 0;
    /* Elimina cualquier margen superior del título */
  }

  .card h3 {
    color: #4D4D4D;
    font-size: 24px; /* Ajustar el tamaño del texto */
    font-weight: 700;
    line-height: 32px;
  }

  .card p {
    margin-top: 0;
    /* Elimina el margen superior del texto */
    color: #717171;
    font-size: 14px; /* Reducir el tamaño del texto */
    font-weight: 400;
    line-height: 20px;
  }

  .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    /* Reduce el espacio entre el ícono y el título */
  }

  .icon-container {
    width: 60px; /* Ajustar el tamaño del ícono */
    height: 60px;
    background-color: #E8F5E9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    /* Ajusta el radio si es necesario */
  }

  .icon-container img {
    max-width: 80%;
    /* Aumenta el tamaño del ícono dentro del cuadrado */
    max-height: 80%;
    /* Aumenta el tamaño del ícono dentro del cuadrado */
  }

  .sinergia-container {
    background-color: #FFFFFF;
    /* Fondo blanco */
    padding: 32px;
    /* Espaciado interno */
  }

  @media (max-width: 768px) {
    main.landing {
      flex-direction: column;
      align-items: center;
    }

    .landing-aside {
      text-align: center;
    }

    .sinergia-section {
      padding: 24px 16px; /* Reducir el padding para pantallas pequeñas */
    }

    .card {
      flex: 1 1 calc(50% - 20px); /* Cambiar a dos columnas en tablets */
    }
  }

  @media (max-width: 480px) {
    .card {
      flex: 1 1 100%; /* Cambiar a una columna en móviles */
    }

    .card h3 {
      font-size: 20px; /* Reducir el tamaño del texto en móviles */
      line-height: 28px;
    }

    .card p {
      font-size: 12px; /* Reducir el tamaño del texto en móviles */
      line-height: 18px;
    }

    .icon-container {
      width: 50px; /* Reducir el tamaño del ícono en móviles */
      height: 50px;
    }
  }
</style>

<style scoped>
body {
  margin: 10%;
  font-family: 'SF Pro Display', sans-serif;
  background-color: #F5F7FA;
}

main.landing {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5% 10%;
  flex-wrap: wrap;
  gap: 20px;
}

.landing-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  flex: 2;
  min-width: 300px;
}

.landing-title {
  padding: 1%;
  color: #34A853;
  font-size: 3.5vw;
  font-weight: bold;
  text-align: left; /* Alinea el texto a la izquierda */
  line-height: 60px;
  max-width: 670px;
  margin: 0; /* Elimina el centrado horizontal */
}

.landing-description {
  padding: 1% 0; /* Reduce el padding lateral */
  font-size: 1.5vw;
  text-align: left; /* Alinea el texto a la izquierda */
  line-height: 27px;
  max-width: 488px;
  margin: 0; /* Elimina el centrado horizontal */
}

.landing-aside {
  flex: 1;
  min-width: 200px;
  text-align: right;
}

.landing-aside img {
  max-width: 100%; /* Imagen se adapta al ancho disponible */
  height: auto;
}

/* Mejoras para el tamaño en dispositivos más pequeños */
@media (max-width: 768px) {
  main.landing {
    flex-direction: column;
    align-items: center;
  }

  .landing-title {
    font-size: 5vw;  /* Ajusta el tamaño de fuente para pantallas pequeñas */
  }

  .landing-description {
    font-size: 3vw;  /* Ajusta el tamaño de fuente para pantallas pequeñas */
    padding: 5%;
  }
.landing-aside.img {
    max-width: 100%;
    height: auto;
  }
  .landing-aside {
    text-align: center;
    margin-top: 20px;
  }
}
</style>

