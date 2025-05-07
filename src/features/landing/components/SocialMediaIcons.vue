
<script lang="ts" setup>

</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="social-buttons-container flex flex-row space-x-6">
      <i class="fab fa-instagram social-icon bg-instagram"></i>
      <i class="fab fa-facebook-f social-icon bg-facebook"></i>
      <i class="fab fa-x-twitter social-icon bg-x"></i>
      <i class="fab fa-whatsapp social-icon bg-whatsapp"></i>
    </div>
  </div>
</template>

<style scoped>
.social-buttons-container {
  margin: 24px 0;
}

/* Estilo base del ícono */
.social-icon {
  font-size: 36px;
  color: white;
  padding: 14px;
  border-radius: 50%;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

/* Gradientes individuales */
.bg-instagram {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
}

.bg-facebook {
  background: linear-gradient(45deg, #1877f2 0%, #0a5fd1 100%);
  padding: 16px; /* Ajuste del padding para mejorar el círculo */
}

.bg-x {
  background: linear-gradient(45deg, #000000 0%, #333333 100%);
}

.bg-whatsapp {
  background: linear-gradient(45deg, #25d366 0%, #128c7e 100%);
}
</style>

<!-- Asegúrate de tener FontAwesome cargado -->
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>
