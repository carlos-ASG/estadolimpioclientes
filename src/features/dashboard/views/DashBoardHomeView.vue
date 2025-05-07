<script setup lang="ts">
import MapCard from '@/features/dashboard/components/MapCard.vue';
import AddCard from '../../features/dashboard/components/AddCard.vue';
import InfoCard from '../../features/dashboard/components/InfoCard.vue';
import StatsCard from '@/features/landing/components/StatsCard.vue'; // Importa el componente
import draggable from 'vuedraggable';
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
