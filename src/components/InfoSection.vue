<template>
  <section class="info-section">
    <div class="info-container">
      <img class="info-image" src="/src/assets/image/reciclar.webp" alt="Imagen de Estado Limpio">
      <div class="info-text">
        <h2 class="info-title text-bold">Estado Limpio</h2>
        <p class="info-description text-light">
          Frente al creciente problema mundial de la basura, desarrollamos el <strong>primer sistema en México</strong> que permite una gestión avanzada, inteligente y sostenible de la recolección de residuos urbanos.
        </p>
        <p class="info-creator text-bold"><strong>Creado por alumnos del Instituto Tecnológico de Tepic</strong></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Copia los estilos relacionados con la sección de información */
.info-section {
  display: flex;
  justify-content: center;
  padding: 32px 0;
  background-color: var(--white); /* Usa la variable global para el color de fondo */
}

.info-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.info-image {
  max-width: 150px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.info-text {
  flex: 1;
}

.info-title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.info-description,
.info-creator {
  font-size: 1rem;
  line-height: 1.5;
  color: #000000;
}

.info-creator {
  font-weight: bold;
}

@media (max-width: 768px) {
  .info-container {
    flex-direction: column;
    text-align: center;
  }

  .info-image {
    max-width: 120px;
  }

  .info-title {
    font-size: 1.5rem;
  }

  .info-description,
  .info-creator {
    font-size: 0.9rem;
  }
}
</style>
