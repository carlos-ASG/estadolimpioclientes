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
const items = ref([
  { id: 1, name: "Arath de Jesus", ruta: "VDCL02", ID: 12, TipoUnidad: "Camion", Zona: 63175, EstadoRuta: "En Curso" },
  { id: 2, name: "Sergio Michael", ruta: "VDCL01", ID: 11, TipoUnidad: "Camion", Zona: 63175, EstadoRuta: "En Curso" },
  { id: 3, name: "Jose Fernando", ruta: "CDVL03", ID: 10, TipoUnidad: "Camion", Zona: 63157, EstadoRuta: "Terminada" },
]);

/*const record = ref({ ...DEFAULT_RECORD });
const dialog = shallowRef(false);
const isEditing = shallowRef(false);
*/
const headers = [
  { title: "Responsable", value: "name", align: "start" },
  { title: "Ruta", value: "ruta" },
  { title: "ID Unidad", value: "ID" },
  { title: "Tipo", value: "TipoUnidad" },
  { title: "Zona", value: "Zona" },
  { title: "Estado", value: "EstadoRuta" },
  { title: "Acciones", value: "actions", align: "end", sortable: false },
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
    <h1>Unidades</h1>

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
         color="transparent">
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
