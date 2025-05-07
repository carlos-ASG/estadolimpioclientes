<script setup lang="ts">
import MapCard from '@/features/dashboard/components/MapCard.vue';
import AddCard from '@/features/dashboard/components/AddCard.vue';
import InfoCard from '@/features/dashboard/components/InfoCard.vue'; // Importa el componente
import StatsCard from '@/features/landing/components/StatsCard.vue'; // Importa el componente
import draggable from 'vuedraggable';
import { ref} from 'vue';

// Importar íconos
import iconUnidades from '@/assets/icons/unidades.svg';
import iconZonas from '@/assets/icons/zonas.svg';
import iconAlertas from '@/assets/icons/alerta.svg';
import iconPersonal from '@/assets/icons/personal.svg';

const cards = ref([
  { id: 1, title: 'Unidades', value: '36', icon: iconUnidades },
  { id: 2, title: 'Zonas', value: '12', icon: iconZonas },
  { id: 3, title: 'Alertas', value: '5', icon: iconAlertas },
  { id: 4, title: 'Personal', value: '20', icon: iconPersonal },
]);
</script>
<template>
    <!-- Tarjetas arrastrables -->
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

      <!-- Contenedor de MapCard y StatsCard -->
      <div class="cards-container">
  <MapCard class="card" />
  <StatsCard class="card" />
</div>


</template>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: var(--background-color, #f9f9f9);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

/* Contenedor de las tarjetas InfoCard */
.info-cards-container {
  display: flex;
  gap: 20px;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
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

/* Contenedor de MapCard y StatsCard */
.cards-container {
  display: flex;
  gap: 20px;
  justify-content: space-between; /* Asegura que las tarjetas estén separadas */
  align-items: flex-start;
  min-width: 20px;
  width: 100%; /* Asegura que el contenedor no exceda el ancho de la página */
  flex-wrap: wrap; /* Permite que las tarjetas se ajusten si no hay suficiente espacio */
}

.card {
  flex: 1 1 48%; /* Cada tarjeta ocupa el 48% del ancho disponible */
  max-width: 48%; /* Limita el ancho máximo de cada tarjeta */
  height: 400px; /* Altura fija para ambas tarjetas */
  background: #f7f7f7;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;


}
</style>
