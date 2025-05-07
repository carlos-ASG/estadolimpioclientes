<script setup lang="ts">
const headers = [
  { text: "Responsable", value: "responsable" },
  { text: "Ruta", value: "ruta" },
  { text: "ID", value: "IDunidad" },
  { text: "Tipo", value: "TipoUnidad" },
  { text: "Zona", value: "Zona" },
  { text: "Estado", value: "EstadoRuta" },
];

const items = [
  { responsable: "Arath de Jesus", ruta: "VDCL02", IDunidad: 12, TipoUnidad: "Camion", Zona: 63175, EstadoRuta: "En Curso" },
  { responsable: "Sergio Michael", ruta: "VDCL01", IDunidad: 11, TipoUnidad: "Camion", Zona: 63175, EstadoRuta: "En Curso" },
];
</script>

<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-2"
      width="100%"

    ></v-data-table>
  </v-container>
</template>

<style scoped>
/* Agrega estilos si es necesario */
</style>
