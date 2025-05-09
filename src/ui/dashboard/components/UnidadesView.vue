<script setup lang="ts">

import { ref } from "vue";

// Controladores para los modales
const showAddModal = ref(false); // Controla la visibilidad del formulario modal
const showDeletePopup = ref(false); // Controla la visibilidad del popup de confirmación
/*
// Datos iniciales
const DEFAULT_RECORD = {
  name: "",
  ruta: "",
  ID: null as number | null,
  TipoUnidad: "",
  Zona: null as number | null,
  EstadoRuta: "",
};
*/
// Lista de datos actualizada
const items = ref([
  { tipo: "Camión", marca: "Chevrolet", modelo: "F1500", año: 2007, color: "Blanco", placa: "ABC-1234", capacidad: "3 Toneladas", fecha: "2023-01-15", serie: "CHV1234567890" },
  { tipo: "Camión", marca: "Izuzu", modelo: "MIYASAKI", año: 1993, color: "Beige", placa: "XYZ-5678", capacidad: "2 Toneladas", fecha: "2023-02-10", serie: "IZU9876543210" },
  { tipo: "Camión", marca: "BMW", modelo: "HKG36", año: 2001, color: "Blanco", placa: "LMN-3456", capacidad: "4 Toneladas", fecha: "2023-03-05", serie: "BMW2468135790" },
  { tipo: "Camioneta", marca: "Toyota", modelo: "Hilux", año: 2015, color: "Rojo", placa: "TUV-1122", capacidad: "1.5 Toneladas", fecha: "2023-04-20", serie: "TOY1230987654" },
  { tipo: "Camión", marca: "Ford", modelo: "F-350", año: 2010, color: "Negro", placa: "JKL-7788", capacidad: "3.5 Toneladas", fecha: "2023-05-12", serie: "FRD4567891230" },
  { tipo: "Camión", marca: "Mercedes-Benz", modelo: "Actros", año: 2018, color: "Azul", placa: "OPQ-3344", capacidad: "5 Toneladas", fecha: "2023-06-18", serie: "MBZ7896541230" },
  { tipo: "Camión", marca: "Volvo", modelo: "FH16", año: 2020, color: "Gris", placa: "RST-9900", capacidad: "6 Toneladas", fecha: "2023-07-25", serie: "VOL1122334455" },
  { tipo: "Camioneta", marca: "Nissan", modelo: "Frontier", año: 2013, color: "Verde", placa: "UVW-5566", capacidad: "2 Toneladas", fecha: "2023-08-14", serie: "NIS9876543210" },
  { tipo: "Camión", marca: "Mack", modelo: "Anthem", año: 2019, color: "Amarillo", placa: "XYZ-7788", capacidad: "4 Toneladas", fecha: "2023-09-01", serie: "MCK1234567890" },
  { tipo: "Camión", marca: "Kenworth", modelo: "T680", año: 2021, color: "Blanco", placa: "ABC-9900", capacidad: "5 Toneladas", fecha: "2023-10-10", serie: "KEN9876543210" },
  { tipo: "Camioneta", marca: "Chevrolet", modelo: "Silverado", año: 2016, color: "Negro", placa: "DEF-2233", capacidad: "3 Toneladas", fecha: "2023-11-05", serie: "CHV2468135790" },
  { tipo: "Camión", marca: "Scania", modelo: "R450", año: 2017, color: "Azul", placa: "GHI-4455", capacidad: "6 Toneladas", fecha: "2023-12-12", serie: "SCA1357924680" },
  { tipo: "Camión", marca: "MAN", modelo: "TGX", año: 2014, color: "Gris", placa: "JKL-6677", capacidad: "5 Toneladas", fecha: "2023-01-20", serie: "MAN0987654321" },
  { tipo: "Camión", marca: "Freightliner", modelo: "Cascadia", año: 2022, color: "Blanco", placa: "MNO-8899", capacidad: "7 Toneladas", fecha: "2023-02-15", serie: "FRL1234567890" },
  { tipo: "Camioneta", marca: "Ford", modelo: "Ranger", año: 2012, color: "Rojo", placa: "PQR-5566", capacidad: "1.8 Toneladas", fecha: "2023-03-30", serie: "FRD0987654321" },
]);
/*const record = ref({ ...DEFAULT_RECORD });
const dialog = shallowRef(false);
const isEditing = shallowRef(false);
*/
const headers = [
  { title: "Tipo Unidad", value: "tipo", align: "start" },
  { title: "Marca", value: "marca" },
  { title: "Modelo", value: "modelo" },
  { title: "Año de Fabricacion", value: "año" },
  { title: "Color", value: "color" },
  { title: "Matricula", value: "placa" },
  { title: "Capacidad Máxima", value: "capacidad" },
  { title: "Fecha de Registro", value: "fecha" },
  { title: "Numero de Serie", value: "serie", align: "end", sortable: false },
  { title: "Opciones", value: "actions", align: "end", sortable: false },
];

/* Funciones
function add() {
  isEditing.value = false;
  record.value = { ...DEFAULT_RECORD };
  dialog.value = true;
}

function edit(id: number) {
  isEditing.value = true;
  const found = items.value.find((item) => item.id === id);
  if (found) {
    record.value = { ...found };
    dialog.value = true;
  }
}

function remove(id: number) {
  const index = items.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.value.splice(index, 1);
  }
}
*/

</script>

<template>
  <v-container fluid background-color="white" class="d-flex flex-column align-center">
    <!-- Tabla -->
    <v-data-table
      :headers="headers"
      :items="items"
      item-value="id"
      class="elevation-2"
    >
      <!-- Botón superior -->
      <template v-slot:top>
        <v-toolbar
        flat
          density="compact"
          color="transparent"
          title="Unidades">
          <v-spacer></v-spacer>
          <v-btn
            prepend-icon="mdi-plus"
            color="green"
            font-weight="bold"
            variant="text"
            class="ma-2"
            @click="showAddModal = true"
          >
            Agregar Unidad
          </v-btn>
        </v-toolbar>
      </template>

      <!-- Acciones -->
      <template v-slot:item.actions="{ item }">
        <v-btn icon color="transparent" @click="showAddModal = true">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="transparent" @click="showDeletePopup = true">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <!-- Sin datos -->
      <template v-slot:no-data>
        <v-btn
          prepend-icon="mdi-backup-restore"
          rounded="lg"
          text="Restablecer datos"
          variant="text"
          border
        ></v-btn>
      </template>
    </v-data-table>

    <!-- Modal para agregar/editar -->
    <v-dialog v-model="showAddModal" max-width="500">
      <v-card>
        <v-card-title>Formulario de Unidad</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Responsable"></v-text-field>
            <v-text-field label="Ruta"></v-text-field>
            <v-text-field label="ID Unidad"></v-text-field>
            <v-text-field label="Tipo"></v-text-field>
            <v-text-field label="Zona"></v-text-field>
            <v-select
              :items="['En Curso', 'Terminada', 'Pendiente']"
              label="Estado"
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showAddModal = false">Cancelar</v-btn>
          <v-btn color="primary" text @click="showAddModal = false">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Popup de confirmación para eliminar -->
    <v-dialog v-model="showDeletePopup" max-width="400">
      <v-card>
        <v-card-title>Confirmar eliminación</v-card-title>
        <v-card-text>
          ¿Estás seguro de que deseas eliminar esta unidad?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="showDeletePopup = false">Cancelar</v-btn>
          <v-btn color="error" text @click="showDeletePopup = false">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
h1 {
  color: #34a853;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.5%;
}

.d-flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.align-center {
  align-items: center;
}
</style>
