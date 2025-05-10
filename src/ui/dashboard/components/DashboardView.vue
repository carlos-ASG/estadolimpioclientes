<script setup lang="ts">
import SidebarMenu from '@/ui/dashboard/components/SidebarMenu.vue';
import SearchBar from './SearchBar.vue';
</script>

<template>
  <div class="dashboard-container">
    <SidebarMenu />
    <div class="main-content">
      <div class="content-header">
        <SearchBar />
      </div>
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: #FFFFFF;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content-header {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}



</style>
