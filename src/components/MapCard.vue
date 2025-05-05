<template>
  <div class="map-card">
    <div id="map" class="google-map"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const apiKey = 'AIzaSyCQiN6OwVABU9E2_FO_GC8uGa2G1hGO4lI';

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Carga el script de Google Maps
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        // Define la función initMap
        window.initMap = () => {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
          });

          // Agrega un marcador en la ubicación actual
          new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map,
            title: 'Tu ubicación',
          });
        };
      },
      () => {
        console.error('No se pudo obtener la ubicación del usuario.');
      }
    );
  } else {
    console.error('El navegador no soporta geolocalización.');
  }
});
</script>

<style scoped>
.map-card {
  width: 642px;
  height: 357px;
  background-color: #f7f7f7;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.google-map {
  width: 100%;
  height: 100%;
}
</style>