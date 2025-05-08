<script setup lang="ts">
import SinergiaCards from '@/features/landing/components/SinergiaCards.vue';
import StatsSection from '@/features/landing/components/StatsSection.vue';
import InfoSection from '@/features/landing/components/InfoSection.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
const stats = [
  {
    icon: "@/assets/icons/User.webp",
    alt: "Icono Usuarios",
    value: "2,245,341",
    label: "Usuarios",
  },
  {
    icon: "@/assets/icons/Gvb.webp",
    alt: "Icono Gobiernos",
    value: "46,328",
    label: "Gobiernos involucrados",
  },
  {
    icon: "@/assets/icons/Recursos.webp",
    alt: "Icono Recursos",
    value: "828,867",
    label: "Recursos Compartidos",
  },
  {
    icon: "@/assets/icons/Card.webp",
    alt: "Icono Empresas",
    value: "1,926,436",
    label: "Empresas Asociadas",
  },
];
</script>

<template>
  <!-- Navbar -->
  <NavbarComponent />
  <!-- Sección principal -->
  <main class="landing">
    <section class="landing-content">
      <article class="landing-title text-bold" style="color: var(--primary-color);">
        Estado Limpio es un sistema integral con la capacidad de gestionar recursos y monitoreo de los mismos
      </article>
      <article class="landing-description text-light" style="color: var(--primary-color);">
        <p>
          <b>
            Nuestro objetivo es implementar un sistema integral que fusiona el seguimiento de la calidad del aire, apoyo y seguimiento, para optimizar la recolección de residuos urbanos.
          </b>
        </p>
      </article>
    </section>

    <aside class="landing-aside">
      <img src="@/assets/icons/boteBasura.webp" alt="iconsN DE BOTE DE BASURA">
    </aside>
  </main>

  <!-- Sinergia -->
  <SinergiaCards />

  <!-- Estadísticas -->
  <StatsSection :stats="stats" />

  <!-- Información -->
  <InfoSection />
  <!-- Footer -->
  <FooterComponent />
</template>

<style scoped>
body {
  margin: 10%;
  font-family: 'SF Pro Display';
  background-color: var(--background-color); /* Usa la variable global para el color de fondo */
}

main.landing {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5% 10%;
  flex-wrap: wrap;
  gap: 20px;
}

.landing-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  flex: 2;
  min-width: 300px;
}

.landing-title {
  padding: 1%;
  font-size: 3.5vw;
  text-align: left; /* Alinea el texto a la izquierda */
  line-height: 60px;
  max-width: 670px;
  margin: 0;
}

.landing-description {
  padding: 1% 0;
  font-size: 1.5vw;
  text-align: left;
  line-height: 27px;
  max-width: 488px;
  margin: 0;
}

.landing-aside {
  flex: 1;
  min-width: 200px;
  text-align: right;
}

.landing-aside img {
  max-width: 100%;
  height: auto;
}

/* Mejoras para el tamaño en dispositivos más pequeños */
@media (max-width: 768px) {
  main.landing {
    flex-direction: column;
    align-items: center;
  }

  .landing-title {
    font-size: 5vw;
  }

  .landing-description {
    font-size: 3vw;
    padding: 5%;
  }

  .landing-aside {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
