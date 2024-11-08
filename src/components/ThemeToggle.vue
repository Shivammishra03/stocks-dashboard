<script setup>
    import { ref, watch } from 'vue';
  
    const isDarkMode = ref(false);
  
    const toggleTheme = () => {
        isDarkMode.value = !isDarkMode.value;
        document.body.classList.toggle('dark-theme', isDarkMode.value);
    };
</script>

<template>
    <button @click="toggleTheme">
      Toggle Theme
    </button>
</template>

<style>
  .dark-theme {
    background-color: #333;
    color: #eee;
  }
</style>
  