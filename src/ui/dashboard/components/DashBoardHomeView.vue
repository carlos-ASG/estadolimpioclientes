<script setup lang="ts">
import MapCard from '@/ui/dashboard/components/MapCard.vue';
import InfoCard from '@/ui/dashboard/components/InfoCard.vue'; // Importa el componente
import StatsCard from '@/ui/landing/components/StatsCard.vue'; // Importa el componente
import ZoneState from '@/ui/dashboard/components/ZoneState.vue';
import UnitsInfo from '@/ui/dashboard/components/UnitsInfo.vue';

import draggable from 'vuedraggable';
import { ref} from 'vue';

// Importar íconos
import iconUnidades from '@/assets/icons/unidades.webp';
import iconZonas from '@/assets/icons/zonas.webp';
import iconAlertas from '@/assets/icons/Alerta.webp';
import iconPersonal from '@/assets/icons/personal.webp';

const cards = ref([
  { id: 1, title: 'Unidades', value: '36', icon: iconUnidades },
  { id: 2, title: 'Zonas', value: '12', icon: iconZonas },
  { id: 3, title: 'Alertas', value: '5', icon: iconAlertas },
  { id: 4, title: 'Personal', value: '20', icon: iconPersonal },
]);
</script>
<template>
  <!-- Contenedor general con grid -->
  <div class="main-grid-container">
    <!-- InfoCard -->
    <div class="main-grid-item info">
      <draggable
        v-model="cards"
        class="info-cards-container"
        animation="200"
        ghost-class="dragging"
        handle=".drag-handle"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="drag-handle">
            <InfoCard :title="element.title" :value="element.value" :icon="element.icon" />
          </div>
        </template>
      </draggable>
    </div>

    <!-- MapCard -->
    <div class="main-grid-item map">
      <MapCard />
    </div>

    <!-- StatsCard -->
    <div class="main-grid-item stats">
      <StatsCard />
    </div>

    <!-- Módulo 3 -->
    <div class="main-grid-item module-3">
      <ZoneState />
    </div>

    <!-- Módulo 4 -->
    <div class="main-grid-item module-4">
      <UnitsInfo />
    </div>
  </div>
</template>

<style scoped>
.content {
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px; /* Reduce el espacio entre los elementos */
  padding: 10px; /* Reduce el padding interno */
}

p {
  margin-bottom: 5px; /* Reduce el espacio debajo del texto "Conectado" */
}

/* Contenedor general */
.main-grid-container {
  display: grid;
  grid-template-rows: 0.2fr 0.5fr 0.5fr; /* Aumenta las proporciones de las filas inferiores */
  grid-template-columns: 1.2fr 0.8fr; /* La primera columna es más ancha que la segunda */
  gap: 10px; /* Espaciado entre los elementos */
  width: 100%;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  box-sizing: border-box;
  margin: 0; /* Elimina cualquier margen */
  padding: 0; /* Elimina cualquier padding */
  max-width: 100vw; /* Asegura que no exceda el ancho de la pantalla */
  overflow-x: hidden; /* Evita el scroll */
  padding: .2rem;
}

/* Elementos del grid */
.main-grid-item {
  display: block; /* Elimina el flex para que el hijo use todo el espacio disponible */
  background-color: #FFFFFF;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
}



/* Estilos específicos para cada área */
.info {
  grid-column: 1 / 3; /* Ocupa ambas columnas */
  grid-row: 1 / 2; /* Primera fila */
}

.map {
  grid-column: 1 / 2; /* Primera columna */
  grid-row: 2 / 3; /* Segunda fila */
  background-color: #FFFFFF; /* Fondo rojo claro */
}

.stats {
  grid-column: 2 / 3; /* Segunda columna */
  grid-row: 2 / 3; /* Segunda fila */
  background-color: #FFFFFF; /* Fondo blanco */
}

.module-3 {
  grid-column: 1 / 2; /* Ocupa la primera columna */
  grid-row: 3 / 4; /* Tercera fila */
  background-color: #ffffff; /* Fondo blanco  */
}

.module-4 {
  grid-column: 2 / 3; /* Ocupa la segunda columna */
  grid-row: 3 / 4; /* Tercera fila */
  background-color: #ffffff; /* Fondo blanco */
}

/* Contenedor de las tarjetas InfoCard */
.info-cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

/* Tarjetas individuales */
.drag-handle {
  flex: 1 1 calc(24% - 10px); /* Ajusta el tamaño de las tarjetas para que ocupen más espacio */
  max-width: calc(24% - 10px); /* Limita el ancho máximo de cada tarjeta */
  min-width: 200px; /* Asegura un ancho mínimo */
  height: 100%; /* Ajusta la altura al tamaño de la celda */
  text-align: center; /* Centra el contenido de las tarjetas */
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
  margin: 0; /* Elimina márgenes adicionales */
}

/* Área arrastrable */
.drag-handle {
  cursor: grab;
  display: inline-block;
}

/* Efecto visual al arrastrar */
.dragging {
  opacity: 0.8;
  transform: scale(1.03);
  transition: transform 0.2s ease;
}
</style>
