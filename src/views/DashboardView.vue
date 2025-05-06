<template>
  <div class="dashboard">
    <SidebarMenu />
    <div class="content">
      <SearchBar />

      <p :style="{ color: connectionColor }">{{ connectionStatus }}</p>

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

      
      <p>Esta es la página principal después de iniciar sesión.</p>

      <!-- Contenedor de MapCard y StatsCard -->
      <div class="cards-container">
        <MapCard />
        <StatsCard /> <!-- Agrega el componente StatsCard aquí -->
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarMenu from '@/components/SidebarMenu.vue';
import MapCard from '@/components/MapCard.vue';
import AddCard from '@/components/AddCard.vue';
import InfoCard from '@/components/InfoCard.vue';
import SearchBar from '@/components/SearchBar.vue';
import StatsCard from '@/components/StatsCard.vue'; // Importa el componente
import draggable from 'vuedraggable';
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import { app } from '@/firebaseConfig';

const connectionStatus = ref('Verificando conexión...');
const connectionColor = ref('black');

onMounted(() => {
  try {
    const db = getDatabase(app);
    const testRef = dbRef(db, '.info/connected');
    onValue(testRef, (snapshot) => {
      if (snapshot.val() === true) {
        connectionStatus.value = 'Conectado';
        connectionColor.value = 'green';
      } else {
        connectionStatus.value = 'No conectado';
        connectionColor.value = 'red';
      }
    });
  } catch (error) {
    connectionStatus.value = 'Error al verificar conexión';
    connectionColor.value = 'red';
    console.error('Error al conectar con Firebase:', error);
  }
});

// Importar íconos
import iconUnidades from '@/assets/Image/unidades.svg';
import iconZonas from '@/assets/Image/zonas.svg';
import iconAlertas from '@/assets/Image/alerta.svg';
import iconPersonal from '@/assets/Image/personal.svg';

const cards = ref([
  { id: 1, title: 'Unidades', value: '36', icon: iconUnidades },
  { id: 2, title: 'Zonas', value: '12', icon: iconZonas },
  { id: 3, title: 'Alertas', value: '5', icon: iconAlertas },
  { id: 4, title: 'Personal', value: '20', icon: iconPersonal },
]);
</script>

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
  justify-content: flex-start; /* Asegura que las tarjetas estén alineadas a la izquierda */
  align-items: flex-start; /* Asegura que las tarjetas estén alineadas en la parte superior */
  overflow: visible; /* Elimina el scroll horizontal */
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
  flex-wrap: nowrap; /* Asegura que los elementos estén en una fila */
  align-items: flex-start; /* Alinea los elementos en la parte superior */
}
</style>