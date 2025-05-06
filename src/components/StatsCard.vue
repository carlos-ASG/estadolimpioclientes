<template>
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
        <div class="subinfo">
          <span class="label">Total gastado</span>
          <span class="percentage">+2.45%</span>
        </div>
        <div class="status">
          <span class="status-circle"></span> En seguimiento
        </div>
      </div>
  
      <!-- Área del gráfico -->
      <LineChart />
  
    </div>
  </template>
  
  <script setup>
  import LineChart from './LineChart.vue';
  </script>
  
  <style scoped>
  .stats-card {
    display: flex;
    flex-direction: column;
    background: #f7f7f7;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 800px;
    box-sizing: border-box;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .monthly-box {
    display: flex;
    align-items: center;
    background: #f4f7fe;
    padding: 8px 12px;
    border-radius: 7px;
    font-weight: 600;
    font-size: 14px;
  }
  
  .monthly-icon {
    margin-right: 6px;
  }
  
  .options {
    background: #999;
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
  
  .stats-header {
    margin-bottom: 15px;
  }
  
  .value {
    font-size: 32px;
    font-weight: 700;
    color: #34a853;
  }
  
  .subinfo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #a3aed0;
    font-weight: 600;
  }
  
  .percentage {
    color: rgba(52, 168, 83, 0.8);
  }
  
  .status {
    margin-top: 10px;
    color: rgba(52, 168, 83, 0.8);
    font-weight: 600;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .status-circle {
    width: 10px;
    height: 10px;
    background: #34a853;
    border-radius: 50%;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .stats-card {
      padding: 15px;
    }
  
    .value {
      font-size: 24px;
    }
  
    .monthly-box {
      font-size: 12px;
      padding: 6px 10px;
    }
  
    .top-bar {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  </style>
  