<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

const route = useRoute();
</script>

<template>
  <!-- Navbar -->
  <NavbarComponent v-if="!route.meta.hideNavbar" />

  <RouterView />

  <!-- Footer -->
  <FooterComponent v-if="!route.meta.hideFooter" />
</template>


