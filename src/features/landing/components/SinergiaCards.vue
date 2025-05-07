<template>
  <section class="sinergia-container">
    <div class="sinergia-header">
      <h2 class="text-center">Hacemos sinergia con:</h2>
      <p class="text-center text-light" style="color: #2F2F2F;">¿A quiénes vamos dirigidos?</p>
    </div>
    <div class="sinergia-cards">
      <div class="card" v-for="(item, index) in sinergiaItems" :key="index">
        <div class="card-icon">
          <div class="icon-container">
            <img :src="item.icon" :alt="item.alt">
          </div>
        </div>
        <div class="card-content">
          <h3 class="text-bold">{{ item.title }}</h3>
          <p class="text-light">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sinergiaItems = [
  {
    icon: "/src/assets/Image/Ciudadanos.webp",
    alt: "Icono Ciudadanos",
    title: "Ciudadanos",
    description: "Como usuarios finales del sistema",
  },
  {
    icon: "/src/assets/Image/Gvb.webp",
    alt: "Icono Gobiernos",
    title: "Gobiernos",
    description: "Como principal herramienta para gestionar los RSU en la población",
  },
  {
    icon: "/src/assets/Image/Organizaciones.webp",
    alt: "Icono Organizaciones",
    title: "Organizaciones privadas",
    description: "Como sistema de gestión y control",
  },
];
</script>

<style scoped>
.sinergia-container {
  background-color: var(--white); /* Usa la variable global para el color de fondo */
  padding: 32px;
}

.sinergia-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  text-align: center;
}

.sinergia-header h2 {
  color: #1f1f1f;
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
  gap: 20px;
}

.card {
  flex: 1 1 calc(33.33% - 20px);
  min-width: 250px;
  padding: 24px 16px;
  background: var(--white); /* Usa la variable global para el color de fondo */
  box-shadow: 0px 2px 4px rgba(171, 190, 209, 0.2);
  border: 2px solid #F4EDED;
  border-radius: 18px;
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
  margin-top: 0;
}

.card h3 {
  color: #1f1f1f;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}

.card p {
  margin-top: 0;
  color: #2F2F2F;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.icon-container {
  width: 60px;
  height: 60px;
  background-color: #E8F5E9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.icon-container img {
  max-width: 80%;
  max-height: 80%;
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .card {
    flex: 1 1 100%;
  }

  .card h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .card p {
    font-size: 12px;
    line-height: 18px;
  }

  .icon-container {
    width: 50px;
    height: 50px;
  }
}
</style>
