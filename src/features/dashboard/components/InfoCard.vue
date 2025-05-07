<script  setup lang="ts">
defineProps({
  title: String,
  value: [String, Number],
  icon: String,
});

</script>

<template>
    <div class="info-card">
      <div class="info-text">
        <div class="title">{{ title }}</div>
        <div class="value">{{ value }}</div>
      </div>
      <img class="icon" :src="icon" alt="icon" />
    </div>
  </template>



  <style scoped>
  .info-card {
    width: 300px;
    height: 80px;
    background: #f7f7f7;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    outline: 1px rgba(0, 0, 0, 0.35) solid;
    outline-offset: -1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 15px;
    cursor: grab; /* <- también aquí por si no se aplica la clase externa */
  }

  .info-text {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .title {
    font-size: 18px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: black;
  }

  .value {
    font-size: 20px;
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: #34a853;
  }

  .icon {
    width: 50px;
    height: 50px;
  }
  </style>
