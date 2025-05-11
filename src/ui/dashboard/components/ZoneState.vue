<template>
  <div class="table-container" @click="onLargeComplexTableContainerClick">
    <div class="table-header">
      <b class="table-title">Estado zonas</b>
      <img class="more-button" alt="More" src="@/assets/icons/More-Button.webp" />
    </div>

    <div class="table-grid header-row">
      <span class="cell">Nombre</span>
      <span class="cell">Estado</span>
      <span class="cell">Fecha</span>
      <span class="cell">Progreso</span>
    </div>

    <div
      v-for="(zone, index) in zones"
      :key="'zone-' + index"
      class="table-grid data-row"
    >
      <span class="cell">{{ zone.name }}</span>
      <span class="cell status">
        <img class="status-icon" :alt="zone.status" :src="getIconSrc(zone.status)" />
        <b :class="getStatusClass(zone.status)">{{ zone.status }}</b>
      </span>
      <span class="cell">{{ zone.date }}</span>
      <span class="cell">
        <div class="progress-bar">
          <div class="progress-bg">
            <div class="progress-fill" :style="{ width: getProgressWidth(index) }"></div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type ZoneStatus = "Finalizada" | "No iniciada" | "Unidad en ruta";

interface Zone {
  date: string;
  name: string;
  status: ZoneStatus;
}

const zones = ref<Zone[]>([
  { date: "12 May 2025", name: "Cantera 1", status: "Finalizada" },
  { date: "12 May 2025", name: "Lagos del country", status: "Finalizada" },
  { date: "12 May 2025", name: "San Juan 2", status: "No iniciada" },
  { date: "12 May 2025", name: "Cd. del valle 1", status: "Unidad en ruta" },
]);

function onLargeComplexTableContainerClick() {
  console.log("Table container clicked");
}

function getStatusClass(status: ZoneStatus): string {
  switch (status) {
    case "Finalizada": return "status-finished";
    case "No iniciada": return "status-pending";
    case "Unidad en ruta": return "status-inroute";
    default: return "";
  }
}

function getIconSrc(status: ZoneStatus): string {
  switch (status) {
    case "Finalizada":
      return new URL('@/assets/icons/check_circle.webp', import.meta.url).href;
    case "No iniciada":
      return new URL('@/assets/icons/cancel.webp', import.meta.url).href;
    case "Unidad en ruta":
      return new URL('@/assets/icons/error.webp', import.meta.url).href;
    default:
      return "";
  }
}

function getProgressWidth(index: number): string {
  const widths = ['78px', '59px', '42px', '92px'];
  return widths[index] || '50px';
}
</script>

<style scoped>
.table-container {
  width: 100%; /* Asegura que ocupe el 100% del ancho disponible */
  max-width: none; /* Elimina cualquier restricción de ancho máximo */
  overflow-x: auto;
  border: 1px solid rgba(0, 0, 0, 0.35);
  background-color: #f7f7f7;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #161719;
  box-sizing: border-box;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 2%;
  color: #34a853;
  font-size: 24px;
  font-family: 'SF Pro Display', sans-serif;
  border-bottom: 1px solid #e9edf7;
}

.table-title {
  font-weight: bold;
}

.more-button {
  width: 5%;
  height: auto;
}

.table-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: .5% 10px;
  align-items: center;
  column-gap: 5%;
  box-sizing: 100%;
  min-width: 100%;
  column-width: auto;
}

.header-row {
  background-color: #ffffff;
  font-weight: 600;
  color: #28b446;
  border-bottom: 1px solid #e9edf7;
}

.data-row {
  background-color: #f7f7f7;
  border-bottom: 1px solid #e9edf7;
}

.cell {
  display: flex;
  align-items: center;
  overflow: hidden;
  min-width: 0;
}

.status-icon {
  width: 20px;
  height: 20px;
  margin-left: 6px;
}

.status-finished {
  color: #34a853;
  font-weight: 600;
}

.status-pending {
  color: #f44336;
  font-weight: 600;
}

.status-inroute {
  color: #fbc02d;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.progress-bg {
  position: relative;
  flex: 1;
  min-width: 50px;
  max-width: 100px;
  height: 8px;
  background-color: #eff4fb;
  border-radius: 21px;
  overflow: hidden;
}

.progress-fill {
  height: 8px;
  border-radius: 21px;
  background-color: #34a853;
  position: absolute;
  top: 0;
  left: 0;
}

/* Responsivo */
@media (max-width: 768px) {
  .table-grid {
    display: block;
  }

  .data-row {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  .cell {
    margin-bottom: 8px;
  }
}
</style>
