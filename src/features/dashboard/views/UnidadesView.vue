<script setup lang="ts">
const headers = [
  { title: "Responsable", value: "name" },
  { title: "Ruta", value: "ruta" },
  { title: "IDunidad", value: "ID" },
  { title: "Tipo", value: "TipoUnidad" },
  { title: "Zona", value: "Zona" },
  { title: "Estado", value: "EstadoRuta" },
];

const items = [
  { name:"Arath de Jesus",
    ruta: "VDCL02",
    ID: 12,
    TipoUnidad: "Camion",
    Zona: 63175,
    EstadoRuta: "En Curso"
  },
  { name: "Sergio Michael", ruta: "VDCL01", ID: 11, TipoUnidad: "Camion", Zona: 63175, EstadoRuta: "En Curso" },
  { name: "Jose Fernando", ruta: "CDVL03", ID: 10, TipoUnidad: "Camion", Zona: 63157, EstadoRuta: "Terminada" },

];
</script>

<template>
    <v-data-table
    :headers="headers"
    :items="items"
    item-key="name"
  ></v-data-table>
</template>

