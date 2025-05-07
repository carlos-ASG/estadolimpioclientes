<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquareInstagram, faSquareFacebook, faSquareWhatsapp, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

// Registrar los íconos en la librería
library.add(faSquareInstagram, faSquareFacebook, faSquareWhatsapp, faSquareXTwitter)
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="social-buttons-container">
      <a href="https://www.instagram.com/estadolimpio/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon :icon="faSquareInstagram" class="social-icon" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100094472079056" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon :icon="faSquareFacebook" class="social-icon" />
      </a>
      <span>
        <FontAwesomeIcon :icon="faSquareXTwitter" class="social-icon" />
      </span>
      <span>
        <FontAwesomeIcon :icon="faSquareWhatsapp" class="social-icon" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.social-buttons-container {
  display: flex;
  justify-content: space-around; /* Distribuye los botones a lo largo de la fila */
  align-items: center;
  width: 100%; /* Asegúrate de que ocupe todo el ancho disponible */
  gap: 20px;
}

.social-icon {
  font-size: 40px; /* Tamaño del ícono cuadrado */
  color: #E2E2E2FF; /* Cambiar color si es necesario */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Efecto de sombra animada */
}
</style>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet"/>

