<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore/registerAuthViewModel';

const authStore = useAuthStore();

const formData = ref({
  name: '',
  email: '',
  password: '',
});

const entityType = ref<'user' | 'company'>('user');

const handleRegister = async () => {
  if (!formData.value.name || !formData.value.email || !formData.value.password) {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  await authStore.registerEntity(entityType.value, formData.value)
    .then(() => {
      alert('Registro exitoso');
    })
    .catch((err) => {
      console.error('Error al registrar:', err);
      alert('Error al registrar. Por favor, inténtelo de nuevo más tarde.');
    });
};
</script>

<template>
  <div class="centered-container">
    <h1>
      <img src="../../assets/Image/EstadoLimpioLogo.webp" alt="Logo" class="logo" />
    </h1>
  </div>

  <div class="grid-container">
    <!-- Columna 1 -->
    <div class="grid-item"><input v-model="formData.name" type="text" placeholder="Nombre" /></div>
    <div class="grid-item"><input v-model="formData.email" type="email" placeholder="Correo" /></div>
    <div class="grid-item"><input type="text" placeholder="Código postal" /></div>
    <div class="grid-item"><input type="text" placeholder="Apellido Paterno" /></div>
    <div class="grid-item"><input type="text" placeholder="Usuario" /></div>
    <div class="grid-item"><input type="text" placeholder="Colonia" /></div>

    <!-- Columna 2 -->
    <div class="grid-item"><input type="text" placeholder="Apellido Materno" /></div>
    <div class="grid-item"><input v-model="formData.password" type="password" placeholder="Contraseña" /></div>
    <div class="grid-item"><input type="text" placeholder="Entre Calle 1" /></div>
     <!-- <div class="grid-item"> <input type="date" v-model="fechaNacimiento"
        :class="{ 'placeholder-date': !fechaNacimiento, 'filled-date': fechaNacimiento }" />
       </div>-->
    <div class="grid-item"><input type="password" placeholder="Confirmar contraseña" /></div>
    <div class="grid-item"><input type="text" placeholder="Entre Calle 2" /></div>

    <!-- Columna 3 -->
    <div class="grid-item"><input type="text" placeholder="Razon Social" /></div>
    <div class="grid-item"><input type="text" placeholder="Estado" /></div>
 <div class="grid-item">
  <select v-model="entityType">
      <option value="user">Usuario</option>
      <option value="company">Empresa</option>
    </select>
    </div>
    <div class="grid-item"><input type="text" placeholder="RFC" /></div>
    <div class="grid-item"><input type="text" placeholder="Ciudad" /></div>
    <div class="grid-item"><button :disabled="authStore.loading" @click="handleRegister">Registrar</button></div>
  </div>

  <div class="volver-container">
    <RouterLink to="/">Volver</RouterLink>
  </div>
</template>

<style scoped>
/* Contenedor centrado */
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 100px;
}

.logo {
  width: 80px;
  transform: translateY(20px);
  /* Actualizado */
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 103px;
  /* Separación entre columnas */
  row-gap: 20px;
  /* Mantén la separación entre filas */
  margin-top: 20px;
}

.grid-item {
  width: 370.69px;
  height: 65.72px;
  border-radius: 8px;
  border: 1px solid #3e3e3e52;
  background: #f7f8f9;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Inputs, select y botones */
input,
select,
button {
  width: 90%;
  height: 80%;
  border: none;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
  background: #f7f8f9;
  color: #000000;
  box-sizing: border-box;
}

select {
  color: #000000;
}

.placeholder-select {
  color: #8391a1;
}

.placeholder-date {
  color: #8391a1;
}

.filled-date {
  color: #000000;
}

button {
  width: 100%;
  height: 100%;
  background-color: #28b446;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}

button:hover {
  background-color: #28b446;
}

button:active {
  transform: scale(0.95);
}

input:focus,
select:focus,
button:focus {
  outline: none;
}

/* Volver */
.volver-container {
  text-align: center;
  margin-top: 20px;
}

.volver-container a {
  color: #28b446;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.volver-container a:hover {
  color: #1e8c36;
}
</style>
