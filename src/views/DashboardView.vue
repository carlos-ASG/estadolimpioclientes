<script setup>
import SidebarMenu from '@/components/SidebarMenu.vue';
import MapCard from '@/components/MapCard.vue';
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

<template>
  <div class="dashboard">
    <SidebarMenu />
    <div class="content">
      <h1>Bienvenido al Dashboard</h1>
      <p>Esta es la página principal después de iniciar sesión.</p>
      <p :style="{ color: connectionColor }">{{ connectionStatus }}</p>
      <MapCard />
    </div>
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
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
}

h1 {
  color: var(--primary-color);
  font-size: 2.5rem;
}

p {
  color: var(--text-color);
  font-size: 1.2rem;
}
</style>