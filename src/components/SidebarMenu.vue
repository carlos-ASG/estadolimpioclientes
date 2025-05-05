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
        <div class="menu-icon">
          <img :src="item.icon" :alt="item.alt" />
          <span class="menu-text">{{ item.text }}</span>
        </div>
      </div>
    </aside>
  </template>
  
  <script setup lang="ts">
  const menuItems = [
    { icon: "https://placehold.co/39x40", alt: "Unidades", text: "Unidades" },
    { icon: "https://placehold.co/41x35", alt: "Zonas", text: "Zonas" },
    { icon: "https://placehold.co/52x50", alt: "Personal", text: "Personal" },
    { icon: "https://placehold.co/44x41", alt: "Pedidos Esp", text: "Pedidos Esp" },
    { icon: "https://placehold.co/51x51", alt: "Solicitar Esp", text: "Solicitar Esp" },
    { icon: "https://placehold.co/38x46", alt: "Alertas", text: "Alertas" },
    { icon: "https://placehold.co/51x51", alt: "Mapa", text: "Mapa" },
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