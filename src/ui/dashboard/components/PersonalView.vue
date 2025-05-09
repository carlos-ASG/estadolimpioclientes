<script setup lang="ts">
import { ref } from "vue";

// Controladores para los modales
const showAddModal = ref(false); // Controla la visibilidad del formulario modal
const showDeletePopup = ref(false); // Controla la visibilidad del popup de confirmación

// Lista de datos actualizada
const items = ref([
  {
    nombre: "Juan Pérez Gómez",
    direccion: "Calle 123, Ciudad",
    cargo: "Conductor",
    licencia: "LIC123456",
    correo: "juan.perez@example.com",
    rfc: "JUAP890123H12",
    contraseña: "password123",
    confirmar_contraseña: "password123",
    uid: "UID001",
    fecha_nacimiento: "1990-01-15",
    empresa: "Transportes ABC",
    unidad_asignada: "Camión Chevrolet F1500",
  },
  {
    nombre: "María López Martínez",
    direccion: "Avenida 456, Ciudad",
    cargo: "Supervisor",
    licencia: "LIC654321",
    correo: "maria.lopez@example.com",
    rfc: "MALO920315H34",
    contraseña: "securepass",
    confirmar_contraseña: "securepass",
    uid: "UID002",
    fecha_nacimiento: "1985-03-20",
    empresa: "Transportes XYZ",
    unidad_asignada: "Camioneta Toyota Hilux",
  },
  {
    nombre: "Carlos Hernández Sánchez",
    direccion: "Boulevard 789, Ciudad",
    cargo: "Mecánico",
    licencia: "LIC789123",
    correo: "carlos.hernandez@example.com",
    rfc: "CAHS850720H56",
    contraseña: "mypassword",
    confirmar_contraseña: "mypassword",
    uid: "UID003",
    fecha_nacimiento: "1980-07-25",
    empresa: "Transportes DEF",
    unidad_asignada: "Camión Ford F-350",
  },
  // Agrega más registros aquí
]);

// Encabezados de la tabla
const headers = [
  { title: "Nombre", value: "nombre", align: "start" },
  { title: "Dirección", value: "direccion" },
  { title: "Cargo", value: "cargo" },
  { title: "Licencia", value: "licencia" },
  { title: "Correo", value: "correo" },
  { title: "RFC", value: "rfc" },
  { title: "UID", value: "uid" },
  { title: "Fecha de Nacimiento", value: "fecha_nacimiento" },
  { title: "Empresa", value: "empresa" },
  { title: "Unidad Asignada", value: "unidad_asignada" },
  { title: "Opciones", value: "actions", align: "end", sortable: false },
];
</script>

<template>
  <v-container fluid background-color="white" class="d-flex flex-column align-center">

    <!-- Contenedor con scroll horizontal -->
    <div class="table-container">
      <v-data-table
        :headers="headers"
        :items="items"
        item-value="uid"
        class="elevation-2"
      >
        <!-- Botón superior -->
        <template v-slot:top>
          <v-toolbar
          flat
          density="compact"
          color="transparent"
          title="Personal"
         style="font-weight: bold;"
          >
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-plus"
              color="green"
              font-weight="bold"
              variant="text"
              class="ma-2"
              @click="showAddModal = true"
            >
              Agregar Personal
            </v-btn>
          </v-toolbar>
        </template>

        <!-- Acciones -->
        <template v-slot:item.actions="{ item }">
          <v-btn icon color="white" @click="showAddModal = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="white" @click="showDeletePopup = true">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>

    <!-- Modal para agregar/editar -->
    <v-dialog v-model="showAddModal" max-width="500">
      <v-card>
        <v-card-title>Formulario de Personal</v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field label="Nombre"></v-text-field>
            <v-text-field label="Apellido Paterno"></v-text-field>
            <v-text-field label="Apellido Materno"></v-text-field>
            <v-text-field label="Dirección"></v-text-field>
            <v-text-field label="Cargo"></v-text-field>
            <v-text-field label="Licencia"></v-text-field>
            <v-text-field label="Correo"></v-text-field>
            <v-text-field label="RFC"></v-text-field>
            <v-text-field label="UID"></v-text-field>
            <v-text-field label="Fecha de Nacimiento"></v-text-field>
            <v-text-field label="Empresa"></v-text-field>
            <v-text-field label="Unidad Asignada"></v-text-field>
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
          ¿Estás seguro de que deseas eliminar este registro de personal?
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
</style>
