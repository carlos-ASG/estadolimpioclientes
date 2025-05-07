<template>
  <aside class="sidebar">
    <!-- Círculos rojo, amarillo y verde -->
    <div class="status-icons">
      <div class="icon red"></div>
      <div class="icon yellow"></div>
      <div class="icon green"></div>
    </div>
    <!-- Menú -->
    <div class="menu-item" v-for="(item, index) in menuItems" :key="index">
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
  </aside>
</template>

<script setup lang="ts">
// Importa las imágenes
import LogoEL from '@/assets/icons/LogoEL.svg';
import unidadesIcon from '@/assets/icons/unidades.svg';
import alertaIcon from '@/assets/icons/alerta.svg';
import mapaIcon from '@/assets/icons/mapa.svg';
import personalIcon from '@/assets/icons/personal.svg';
import solicitarEspIcon from '@/assets/icons/solicitar_esp.svg';
import zonasIcon from '@/assets/icons/zonas.svg';

const menuItems = [
  {icon: LogoEL, alt: "Logo EL", text: "", route: "/dashboard"},
  { icon: unidadesIcon, alt: "Unidades", text: "Unidades", route: "/dashboard/unidades" },
  { icon: zonasIcon, alt: "Zonas", text: "Zonas", route: "/dashboard/zonas" },
  { icon: personalIcon, alt: "Personal", text: "Personal", route: "/dashboard/personal" },
  { icon: "https://placehold.co/44x41", alt: "Pedidos Esp", text: "Pedidos Esp" },
  { icon: solicitarEspIcon, alt: "Solicitar Esp", text: "SolicitarEsp" },
  { icon: alertaIcon, alt: "Alertas", text: "Alertas", route: "/dashboard/alertas" },
  { icon: mapaIcon, alt: "Mapa", text: "Mapa", route: "/dashboard/mapa" },
  { icon: "https://placehold.co/51x51", alt: "Cerrar Sesión", text: "Cerrar Sesión" },
];
</script>

<style scoped>
.sidebar {
  height: 150vh;
  width: 120px;
  background-color: #34a853;
  padding: 22px 12px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  border-radius: 10px;
  justify-content: space-between;
}

.status-icons {
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  margin-bottom: 5px; /* Espaciado entre los círculos y el menú */
}

.icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid transparent; /* Simula el borde del ejemplo */
}

.icon.red {
  background-color: #ff6252;
}

.icon.yellow {
  background-color: #fdad15;
}

.icon.green {
  background-color: #00ff72;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.menu-icon {
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.menu-icon:hover {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.35); /* Sombra más pronunciada */
  background-color: #f0f0f0; /* Cambia el fondo a un gris claro */
}

.menu-icon img {
  width: 50%;
  height: auto;
}

.menu-text {
  margin-top: 8px;
  font-size: 12px;
  color: #000;
  text-align: center;
}
</style>
