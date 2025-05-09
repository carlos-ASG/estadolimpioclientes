<script setup lang="ts">
import { ref } from 'vue';

// Datos de las empresas
const empresas = ref([
  {
    nombre: 'AMBIENTALISMO Y ECOSERVICIOS DE NAYARIT, S.A. DE C.V. Y/O FOJESA',
    direccion: 'Camino Viejo a San Cayetano No. 3, Col. San José',
    localidad: 'Tepic',
    municipio: 'Tepic',
    estado: 'Nayarit',
    residuos: 'Residuos sólidos urbanos, lodos, aguas residuales, grasa',
    estadoFalta: 'verde', // Estado: verde (sin faltas)
  },
  {
    nombre: 'PIPAS Y SERVICIOS LA VENA S. DE R.L. DE C.V.',
    direccion: 'Calle Tucanes No. 214',
    localidad: 'Nuevo Nayarit',
    municipio: 'Bahía de Banderas',
    estado: 'Nayarit',
    residuos: 'Lodos y aguas residuales',
    estadoFalta: 'amarillo', // Estado: amarillo (advertencia)
  },
  {
    nombre: 'PLÁSTICOS VPSA, S. DE R.L. DE C.V.',
    direccion: 'Volcán Paricutín No. 6581, Col. El Collí Urbano',
    localidad: 'Zapopan',
    municipio: 'Zapopan',
    estado: 'Jalisco',
    residuos: 'Plásticos, papel, cartón, madera, metales, electrónicos',
    estadoFalta: 'rojo', // Estado: rojo (con faltas)
  },
    {
        nombre: 'RECOLECTORES DE RESIDUOS SÓLIDOS URBANOS, S.A. DE C.V.',
        direccion: 'Calle 5 de Febrero No. 1234',
        localidad: 'Guadalajara',
        municipio: 'Guadalajara',
        estado: 'Jalisco',
        residuos: 'Residuos sólidos urbanos, lodos, aguas residuales',
        estadoFalta: 'verde', // Estado: verde (sin faltas)
    },
    {
        nombre: 'SERVICIOS AMBIENTALES DE NAYARIT, S.A. DE C.V.',
        direccion: 'Calle del Río No. 4567',
        localidad: 'Tepic',
        municipio: 'Tepic',
        estado: 'Nayarit',
        residuos: 'Residuos peligrosos, residuos sólidos urbanos',
        estadoFalta: 'rojo', // Estado: amarillo (advertencia)
    },
    {
        nombre: 'RECOLECTORES DE RESIDUOS SÓLIDOS URBANOS, S.A. DE C.V.',
        direccion: 'Calle 5 de Febrero No. 1234',
        localidad: 'Guadalajara',
        municipio: 'Guadalajara',
        estado: 'Jalisco',
        residuos: 'Residuos sólidos urbanos, lodos, aguas residuales',
        estadoFalta: 'rojo', // Estado: rojo (con faltas)
    },
    {
        nombre: 'SERVICIOS AMBIENTALES DE NAYARIT, S.A. DE C.V.',
        direccion: 'Calle del Río No. 4567',
        localidad: 'Tepic',
        municipio: 'Tepic',
        estado: 'Nayarit',
        residuos: 'Residuos peligrosos, residuos sólidos urbanos',
        estadoFalta: 'verde', // Estado: verde (sin faltas)
    },
  
  // Agrega más registros aquí con el campo `estadoFalta`
]);

// Encabezados de la tabla
const headers = [
  { title: 'Nombre de la empresa', value: 'nombre' },
  { title: 'Dirección', value: 'direccion' },
  { title: 'Localidad', value: 'localidad' },
  { title: 'Municipio', value: 'municipio' },
  { title: 'Estado', value: 'estado' },
  { title: 'Residuos Autorizados', value: 'residuos' },
  { title: 'Estado', value: 'estadoFalta', align: 'center' as const }, // Nueva columna
];

// Estado para controlar el modal
const showAddModal = ref(false);
</script>

<template>
  <v-container fluid background-color="white" class="d-flex flex-column align-center">
    <!-- Contenedor con scroll horizontal -->
    <div class="table-container">
      <v-data-table
        :headers="headers"
        :items="empresas"
        item-value="nombre"
        class="elevation-2"
      >
        <!-- Botón superior -->
        <template v-slot:top>
          <v-toolbar flat density="compact" color="transparent" title="Empresas" style="font-weight: bold;">
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-plus"
              color="green"
              font-weight="bold"
              variant="text"
              class="ma-2"
              @click="showAddModal = true"
            >
              Agregar Empresa
            </v-btn>
          </v-toolbar>
        </template>

        <!-- Columna personalizada para el estado -->
        <template v-slot:item.estadoFalta="{ item }">
          <div
            :class="{
              'estado-verde': item.estadoFalta === 'verde',
              'estado-amarillo': item.estadoFalta === 'amarillo',
              'estado-rojo': item.estadoFalta === 'rojo',
            }"
            class="estado-circulo"
          ></div>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>

<style scoped>
.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.align-center {
  align-items: center;
}

/* Contenedor con scroll horizontal */
.table-container {
  overflow-x: auto;
  width: 100%;
  margin-top: 20px;
}

.v-data-table {
  min-width: 1200px; /* Ajusta este valor según el número de columnas */
}

/* Estilos para los círculos de estado */
.estado-circulo {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
}

.estado-verde {
  background-color: green;
}

.estado-amarillo {
  background-color: yellow;
}

.estado-rojo {
  background-color: red;
}
</style>