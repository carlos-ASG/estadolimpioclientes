<template>
  <div class="stats-grid">
    <!-- Primera fila -->
    <div class="stats-card">
      <div class="top-bar">
        <div class="monthly-box">
          <span class="monthly-icon">📅</span>
          <span class="monthly-text">Mensual</span>
        </div>
        <div class="options">⬛</div>
      </div>

      <div class="stats-header">
        <div class="value">$37.5K</div>

        <div class="stats-row">
          <div class="subinfo">
            <span class="status">
              <span class="status-circle"></span> En seguimiento
            </span>
            <span class="percentage">+5%</span>
            <span>desde el mes pasado</span>
          </div>
        </div>
        <!-- Área del gráfico -->
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LineChart from '@/ui/dashboard/components/LineChart.vue';
</script>

<style scoped>
.stats-grid {
  display: grid;
  width: 100%;
  height: 100%; /* Ocupa todo el espacio disponible */
}

.stats-card {
  flex-direction: column;
  background: #ffffff; /* Fondo blanco */
  border-radius: 16px; /* Bordes redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra más suave */
  width: 100%;
  height: 100%; /* Ocupa todo el espacio disponible */
  overflow: hidden; /* Evita que el contenido desborde */
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Asegura que los elementos estén alineados verticalmente */
}

.monthly-box {
  display: flex;
  align-items: center;
  background: #f4f7fe;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: #333;
}

.monthly-icon {
  margin-right: 8%;
  font-size: 1.25rem;
}

.options {
  background: #f4f7fe;
  width: 10%;
  height: auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: #666;
  margin-left: 0; /* Elimina el margen izquierdo */
} /* Añade cierre de bloque para .options */

.stats-header {
  text-align: center;
  flex-grow: 1; /* Permite que el encabezado crezca para ocupar espacio disponible */
}

.value {
  font-size: 1.3rem; /* Tamaño más grande */
  font-weight: 700;
  color: #34a853;
}

.subinfo {
  display: flex;
  justify-content: space-between; /* Distribuye los elementos a los extremos */
  align-items: center; /* Alinea verticalmente los elementos */
  width: 100%; /* Asegura que ocupe todo el ancho */
}

.status {
  color: #34a853;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.percentage {
  color: #34a853;
  font-weight: 600;
  text-align: right; /* Asegura que el texto esté alineado a la derecha */
  margin-left: auto; /* Empuja el porcentaje hacia la derecha */
  padding: 0.6%;
}

.status-circle {
  width: 12px;
  height: 12px;
  background: #34a853;
  border-radius: 50%;
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
  .stats-card {
    flex-direction: column;
    padding: 16px;
    height: auto; /* Permite que la tarjeta se ajuste al contenido */
  }

  .stats-header {
    text-align: left; /* Alinea el texto a la izquierda */
  }

  .value {
    font-size: .9rem; /* Reduce el tamaño del texto */
  }

  .subinfo {
    flex-direction: column; /* Cambia a diseño vertical */
    align-items: flex-start; /* Alinea los elementos al inicio */
    gap: 8px; /* Espaciado entre elementos */
  }

  .percentage {
    text-align: left; /* Alinea el porcentaje a la izquierda */
    margin-left: 0; /* Elimina el margen izquierdo */
  }
}
</style>
