<template>
  <div class="navBar">
    <div class="search-bar">
      <input type="text" placeholder="Buscar..." />
      <img src="@/assets/icons/lupa.webp" alt="Buscar" class="search-icon" />
    </div>
    <img src="../../../assets/icons/EstadoLimpioContainer.webp" alt="" class="navBar-image" />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navBar {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 10vh;
  background-color: #ffffff;
  padding: 1%;
}

.search-bar {
  width: 35%;
  height: 20%;
  background: #f7f7f7;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  outline: 1px rgba(0, 0, 0, 0.35) solid;
  outline-offset: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8% 1.2%;
  margin: 0;
}

.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 2vw;
  font-family: Inter, sans-serif;
  color: #333;
}

.search-bar .search-icon {
  width: 1.5vw;
  height: auto;
}

.navBar-image {
  width: 23%;
  height: auto;
  border-radius: 8px;
  margin-left: auto;
}
</style>
