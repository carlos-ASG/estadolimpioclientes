<template>
  <section class="stats-section">
    <div class="stats-container">
      <div class="stats-text">
        <h2 class="highlight text-bold">Una nueva era en la recolección de residuos por y para nuestra gente.</h2>
        <h3 class="stats-subheading text-light" style="color: var(--text-color); text-decoration: underline;">
          Estamos aquí para mitigar el problema más importante
        </h3>
      </div>
      <div class="stats-grid">
        <div class="stat-item" v-for="(stat, index) in stats" :key="index">
          <div class="stat-icon">
            <div class="icon-box">
              <img :src="stat.icon" :alt="stat.alt">
            </div>
          </div>
          <div class="stat-info">
            <span class="stat-value text-bold">{{ stat.value }}</span>
            <span class="stat-label text-light">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    icon: "src/assets/icons/User.webp",
    alt: "Icono Usuarios",
    value: "2,245,341",
    label: "Usuarios",
  },
  {
    icon: "src/assets/icons/Gvb.webp",
    alt: "Icono Gobiernos",
    value: "46,328",
    label: "Gobiernos involucrados",
  },
  {
    icon: "src/assets/icons/Recursos.webp",
    alt: "Icono Recursos",
    value: "828,867",
    label: "Recursos Compartidos",
  },
  {
    icon: "src/assets/icons/Card.webp",
    alt: "Icono Empresas",
    value: "1,926,436",
    label: "Empresas Asociadas",
  },
];
</script>

<style scoped>
.stats-section {
  padding: 64px 16px;
  background: var(--white); /* Usa la variable global para el color de fondo */
}

.stats-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.stats-text {
  grid-column: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-item {
  background-color: var(--white); /* Usa la variable global para el color de fondo */
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: scale(1.05);
}

.stat-icon .icon-box img {
  width: 50px;
  height: auto;
  margin-bottom: 10px;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
}

.stat-label {
  font-size: 1rem;
  color: #2F2F2F;
}
</style>
