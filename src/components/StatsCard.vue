<template>
    <div class="stats-card">
      <div class="monthly-box">
        <div class="monthly-icon"></div>
        <div class="monthly-text">Mensual</div>
      </div>
  
      <div class="icon-box"></div>
      <div class="icon"></div>
  
      <div class="value">$37.5K</div>
      <div class="label">Total gastado</div>
      <div class="percentage">+2.45%</div>
  
      <div class="status-circle">
        <div class="inner-circle"></div>
      </div>
      <div class="status">En seguimiento</div>
  
      <div class="price-tag">
        <div class="price-background"></div>
        <div class="price-text">$108.00</div>
      </div>
  
      <!-- Gráfico -->
      <LineChart class="chart" />
    </div>
  </template>
  
  <script setup>
  import LineChart from './LineChart.vue';
  </script>
  
  <style scoped>
  .stats-card {
    width: 100%;
    max-width: 800px; /* Regresa al ancho anterior */
    height: 500px; /* Un poco más larga */
    background: #f7f7f7;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
    outline: 1px solid rgba(0, 0, 0, 0.35);
    font-family: 'Inter', sans-serif;
  }
  
  /* Gráfico */
  .chart {
    position: absolute;
    bottom: 100px; /* Ajustado para que el gráfico tenga más espacio */
    left: 20px;
    right: 20px;
    height: 220px; /* Más alto */
    z-index: 0;
  }
  
  /* Etiqueta Mensual */
  .monthly-box {
    width: 123px;
    height: 37px;
    background: #f4f7fe;
    border-radius: 7px;
    outline: 1px rgba(0, 0, 0, 0.35) solid;
    outline-offset: -1px;
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  
  .monthly-icon {
    width: 18px;
    height: 18px;
    background: rgba(0, 0, 0, 0.66);
    border-radius: 4px;
  }
  
  .monthly-text {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.66);
  }
  
  /* Icono arriba derecha */
  .icon-box {
    width: 37px;
    height: 37px;
    background: #f4f7fe;
    border-radius: 10px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    background: gray;
    position: absolute;
    top: 26px;
    right: 26px;
  }
  
  /* Valor principal */
  .value {
    position: absolute;
    top: 90px;
    left: 26px;
    font-size: 34px;
    font-weight: 600;
    color: #34a853;
    text-align: left; /* Alinea el texto a la izquierda */
  }
  
  .label {
    position: absolute;
    top: 128px;
    left: 26px;
    font-size: 14px;
    font-weight: 600;
    color: #a3aed0;
    text-align: left; /* Alinea el texto a la izquierda */
  }
  
  .percentage {
    position: absolute;
    top: 130px;
    left: 130px;
    font-size: 12px;
    color: rgba(52, 168, 83, 0.8);
    font-weight: 700;
    text-align: left; /* Alinea el texto a la izquierda */
  }
  
  /* Estado */
  .status {
    position: absolute;
    top: 170px;
    left: 50px;
    font-size: 16px;
    color: rgba(52, 168, 83, 0.8);
    font-weight: 700;
    text-align: left; /* Alinea el texto a la izquierda */
  }
  
  .status-circle {
    width: 16px;
    height: 16px;
    background: rgba(52, 168, 83, 0.8);
    border-radius: 50%;
    position: absolute;
    top: 174px;
    left: 26px;
  }
  
  .inner-circle {
    width: 11px;
    height: 11px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 2.5px;
    left: 2.5px;
  }
  
  /* Precio flotante */
  .price-tag {
    position: absolute;
    top: 120px;
    left: 340px;
    width: 50px;
    height: 30px;
  }
  
  .price-background {
    background: #34a853;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
  
  .price-text {
    position: absolute;
    top: 6px;
    left: 4px;
    color: white;
    font-size: 11px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
  }
  </style>