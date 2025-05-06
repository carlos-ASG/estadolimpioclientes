<template>
    <Line :data="data" :options="options" />
  </template>
  
  <script setup>
  import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
  } from 'chart.js';
  import { Line } from 'vue-chartjs';
  
  ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip);
  
  const data = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    datasets: [
      {
        label: 'Gasto mensual',
        data: [36, 32, 108, 80, 90, 92],
        borderColor: '#34a853',
        backgroundColor: '#34a85333',
        fill: true,
        tension: 0.4, // Hace que la línea sea curva
        pointBackgroundColor: '#34a853',
        pointRadius: 5,
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => `$${ctx.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#a3aed0' },
        grid: { display: false },
      },
      y: {
        ticks: { color: '#a3aed0' },
        grid: { display: false },
      },
    },
    animations: {
      y: {
        duration: 2000, // Duración de la animación en milisegundos
        easing: 'easeInOutQuad', // Efecto de animación
        from: (ctx) => {
          if (ctx.type === 'data') {
            return ctx.chart.scales.y.getPixelForValue(0); // Empieza desde el valor 0
          }
        },
      },
    },
  };
  </script>
  
  <style scoped>
  canvas {
    max-height: 160px;
  }
  </style>