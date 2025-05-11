<template>
  <div class="unidad-card" @click="onClick">
    <div class="header">
      <div class="title-container">
        <h2 class="title">Unidades</h2>
        <h3 class="unidad-id">{{ unit.id }}</h3>
      </div>
      <img class="more-button" src="@/assets/icons/More-Button.webp" alt="Más opciones" />
    </div>

    <div class="content">
      <div class="image-and-info">
        <div class="image-container">
          <img class="truck-image" :src="unit.image" :alt="unit.alt" />
        </div>
        <div class="info-grid">
          <div class="grid-item" v-for="(info, index) in unit.details" :key="index">
            <div class="label">{{ info.label }}</div>
            <div class="value">
              <template v-if="Array.isArray(info.value)">
                <p
                  v-for="(item, idx) in info.value"
                  :key="idx"
                  :class="{ 'helper-text': info.label === 'Ayudantes' }"
                >
                  {{ item }}
                </p>
              </template>
              <template v-else>
                {{ info.value }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import unidadImage from '@/assets/icons/Unidad_01.webp';

const unit = {
  image: unidadImage,
  alt: "Camión",
  id: "Unidad-NAY-001",
  details: [
    { label: "No.Placa", value: "9V-SHT" },
    { label: "Responsable", value: "Michael" },
    { label: "Vida", value: "2 años" },
    { label: "Ayudantes", value: ["Fernando Ruiz", "Arath Cortez"] },
    { label: "Tipo", value: "Recolector" },
    { label: "KM", value: "9,321 mi" },
  ],
};

function onClick() {
  console.log("Unidad clickeada");
}
</script>

<style scoped>
.unidad-card {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.35);
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  box-sizing: border-box;
  padding: 0.8rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 2%;
  color: #34a853;
  font-size: 24px;
  font-family: 'SF Pro Display', sans-serif;
  border-bottom: 1px solid #e9edf7;
}

.title-container {
  display: flex;
  align-items: center;
  gap: 1rem; /* Espacio entre el título y el nombre de la unidad */
}

.title {
  color: #34a853;
  font-family: 'SF Pro Display', sans-serif;
  font-size: 1.8rem;
  margin: 0;
}

.unidad-id {
  font-size: 1.3rem;
  font-weight: 600;
  color: #161719;
  white-space: nowrap; /* Mantén el texto en una sola línea */
  overflow: hidden; /* Oculta el texto que exceda el contenedor */
  text-overflow: ellipsis; /* Agrega puntos suspensivos si el texto es demasiado largo */
}

.more-button {
  width: 20px;
  height: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.image-and-info {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.truck-image {
  width: 95%;
  height: auto;
  object-fit: contain;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas */
  grid-auto-rows: auto; /* Ajusta automáticamente la altura de las filas */
  gap: 0.8rem;
  max-width: 100%;
  overflow-wrap: break-word;
}

.grid-item .label {
  font-weight: 700;
  color: #34a853;
  font-size: 0.75rem;
}

.grid-item .value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  line-height: 1.3;
}

.grid-item .value p {
  margin: 0;
  line-height: 1.2;
  word-break: break-word;
}

.grid-item .label,
.grid-item .value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.helper-text {
 font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  line-height: 1.3;}

/* Responsive */
@media (max-width: 768px) {
  .image-and-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .info-grid {
    grid-template-columns: 1fr; /* Cambia a una sola columna en pantallas pequeñas */
  }

  .unidad-id {
    font-size: 1.2rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .more-button {
    width: 18px;
    height: 18px;
  }
}
</style>
