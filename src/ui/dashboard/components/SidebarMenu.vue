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
import LogoEL from '@/assets/icons/LogoEL.webp';
import unidadesIcon from '@/assets/icons/unidades.webp';
import alertaIcon from '@/assets/icons/Alerta.webp';
import mapaIcon from '@/assets/icons/mapa.webp';
import personalIcon from '@/assets/icons/personal.webp';
import solicitarEspIcon from '@/assets/icons/solicitar_esp.webp';
import zonasIcon from '@/assets/icons/zonas.webp';
import salir from '@/assets/icons/salir.webp';

const menuItems = [
  {icon: LogoEL, alt: "Logo EL", text: "", route: "/dashboard"},
  { icon: unidadesIcon, alt: "Unidades", text: "Unidades", route: "/dashboard/unidades" },
  { icon: zonasIcon, alt: "Zonas", text: "Zonas", route: "/dashboard/zonas" },
  { icon: personalIcon, alt: "Personal", text: "Personal", route: "/dashboard/personal" },
  { icon: solicitarEspIcon, alt: "Solicitar Especiales", text: "Padrones", route: "/dashboard/Padrones" },
  { icon: unidadesIcon, alt: "Unidades", text: "Unidades", route: "/dashboard/unidades" },
  { icon: alertaIcon, alt: "Alertas", text: "Alertas", route: "/dashboard/alertas" },
  { icon: mapaIcon, alt: "Mapa", text: "Mapa", route: "/dashboard/mapa" },
  { icon: salir, alt: "Cerrar Sesión", text: "Salir" },
];
</script>

<style scoped>
.sidebar {
  height: 150vh; /* Ajusta la altura al 100% de la pantalla */
  width: 10%; /* Ajusta el ancho como porcentaje */
  background-color: #34a853;
  padding: 2% 1%; /* Ajusta el padding como porcentaje */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribuye el espacio entre los elementos */
  border-radius: 10px;
}

.status-icons {
  display: flex;
  justify-content: center; /* Centra los círculos horizontalmente */
  gap: 5%; /* Espaciado entre los círculos */
  margin-bottom: 15%;
}

.icon {
  width: 5%; /* Ajusta el tamaño como porcentaje */
  height: auto; /* Ajusta el tamaño como porcentaje */
  border-radius: 50%;
  border: 1px solid transparent; /* Simula el borde del ejemplo */
  padding: 6%; /* Agrega padding para completar la propiedad */
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
  gap: 10%; /* Incrementa el espaciado entre los íconos */
  flex-grow: 1;
  justify-content: space-between;
}

.menu-icon {
  width: 61%; /* Reduce el ancho del cuadro */
  aspect-ratio: 1; /* Mantiene una proporción cuadrada */
  background-color: white;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20%; /* Incrementa el espaciado entre los cuadros */
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative; /* Cambia 'center' a 'relative' */
  margin: 0 auto; /* Centra el ícono horizontalmente */
  margin-bottom: 10%; /* Agrega un margen inferior para mayor separación */
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease; /* Corrige el doble punto y coma */
}

.menu-icon:hover {
  transform: scale(1.1); /* Aumenta ligeramente el tamaño */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.35); /* Sombra más pronunciada */
  background-color: #f0f0f0; /* Cambia el fondo a un gris claro */
}

.menu-icon img {
  width: 50%; /* Ajusta el tamaño del ícono como porcentaje del contenedor */
  height: auto; /* Mantiene la proporción del ícono */
}

.menu-text {
  margin-top: 3%; /* Ajusta el margen superior como porcentaje */
  font-size: 68%; /* Reduce el tamaño del texto */
  font-family: Inter, sans-serif; /* Aplica la fuente Inter */
  font-weight: 550; /* Aplica el peso de la fuente */
  color: black; /* Cambia el color del texto a negro */
  text-align: center;
}

</style>
