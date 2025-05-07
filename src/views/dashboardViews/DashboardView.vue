<template>
  <div class="dashboard">
    <SidebarMenu />
    <div class="content">
      <SearchBar />

      <p :style="{ color: connectionColor }">{{ connectionStatus }}</p>

      <p>Esta es la página principal después de iniciar sesión.</p>

  <RouterView />
</div>
    </div>

</template>

<script setup lang="ts">
import SidebarMenu from '@/features/dashboard/components/SidebarMenu.vue';
import SearchBar from '../../features/dashboard/components/SearchBar.vue';
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
