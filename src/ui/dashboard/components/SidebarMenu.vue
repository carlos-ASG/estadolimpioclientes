<script setup lang="ts">
import LogoEL from '@/assets/icons/LogoEL.webp';
import unidadesIcon from '@/assets/icons/unidades.webp';
import alertaIcon from '@/assets/icons/Alerta.webp';
import mapaIcon from '@/assets/icons/mapa.webp';
import personalIcon from '@/assets/icons/personal.webp';
import solicitarEspIcon from '@/assets/icons/solicitar_esp.webp';
import zonasIcon from '@/assets/icons/zonas.webp';
import salir from '@/assets/icons/salir.webp';

const menuItems = [
  { icon: LogoEL, alt: "Logo EL", text: "", route: "/dashboard" },
  { icon: unidadesIcon, alt: "Unidades", text: "Unidades", route: "/dashboard/unidades" },
  { icon: zonasIcon, alt: "Zonas", text: "Zonas", route: "/dashboard/zonas" },
  { icon: personalIcon, alt: "Personal", text: "Personal", route: "/dashboard/personal" },
  { icon: solicitarEspIcon, alt: "Padrones", text: "Padrones", route: "/dashboard/Padrones" },
  { icon: alertaIcon, alt: "Alertas", text: "Alertas", route: "/dashboard/alertas" },
  { icon: mapaIcon, alt: "Mapa", text: "Mapa", route: "/dashboard/mapa" },
  { icon: salir, alt: "Cerrar Sesión", text: "Salir", route: null },
];
</script>


<template>
  <aside class="sidebar">
    <!-- Menú -->
    <div class="menu-item">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-icon-wrapper"
      >
        <RouterLink
          v-if="item.route"
          :to="item.route"
          class="menu-icon"
        >
          <img :src="item.icon" :alt="item.alt" />
          <span class="menu-text">{{ item.text }}</span>
        </RouterLink>
        <div v-else class="menu-icon">
          <img :src="item.icon" :alt="item.alt" />
          <span class="menu-text">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>



<style scoped>

.menu-icon-wrapper {
  display: flex;
  justify-content: center;
}

.sidebar {
  height: 100vh;
  width: 9.5%;
  background-color: #34a853;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px 0 0 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.menu-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 auto;
  width: 70%;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.menu-icon:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.3);
  background-color: #e0e0e0;
}

.menu-icon img {
  width: 45%;
  height: auto;
}

.menu-text {
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  color: black;
  text-align: center;
}
</style>
