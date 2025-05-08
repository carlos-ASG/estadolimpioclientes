<script setup lang="ts">
defineProps({
  title: String,
  value: [String, Number],
  icon: String,
});
</script>

<template>
  <div class="info-card">
    <div class="info-text">
      <div class="title">{{ title }}</div>
      <div class="value">{{ value }}</div>
    </div>
    <img class="icon" :src="icon" alt="icon" />
  </div>
</template>

<style scoped>
.info-card {
  width: 100%; /* Ocupa todo el ancho disponible */
  height: 100%; /* Ocupa toda la altura de la celda del grid */
  background: #f7f7f7;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px; /* Ajusta el radio para que sea proporcional */
  display: flex; /* Usa flexbox para organizar los elementos */
  align-items: center; /* Centra verticalmente los elementos */
  justify-content: space-between; /* Espacia los elementos horizontalmente */
  padding: 10px; /* Reduce el espaciado interno */
  box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
  overflow: hidden; /* Evita que el contenido se desborde */
  gap: 20px; /* Reduce el espacio entre el texto y el ícono */
}

.info-text {
  display: flex;
  flex-direction: column; /* Coloca el título y el valor en una columna */
  align-items: flex-start; /* Alinea el texto a la izquierda */
  justify-content: center; /* Centra verticalmente el contenido */
  flex: 1; /* Permite que el texto ocupe el espacio disponible */
  overflow: hidden; /* Evita desbordamientos */
}

.title {
  font-size: 1rem; /* Ajusta el tamaño del texto */
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: black;
  white-space: nowrap; /* Evita que el texto se desborde */
  overflow: hidden; /* Oculta el texto desbordado */
  text-overflow: ellipsis; /* Agrega puntos suspensivos si el texto es muy largo */
}

.value {
  font-size: 1.5rem; /* Ajusta el tamaño del texto */
  font-family: Inter, sans-serif;
  font-weight: 600;
  color: #34a853;
  text-align: center;
  padding: 0 5px; /* Reduce el espaciado interno */
  line-height: 1.2; /* Ajusta la altura de línea */
}

.icon {
  width: 42px; /* Ajusta el tamaño del ícono */
  height: auto; /* Ajusta el tamaño del ícono */
  object-fit: contain; /* Mantiene la proporción del ícono */
  flex-shrink: 0; /* Evita que el ícono se reduzca */
  margin-left: 10px; /* Reduce el margen izquierdo para acercarlo al texto */
}
</style>
