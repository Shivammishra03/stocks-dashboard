<script setup>
    import { ref, watch } from 'vue';
    import VueDatePicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
  
    const range = ref([new Date(), new Date()]);
    const emit = defineEmits(['change']);
  
    watch(range, (newRange) => {
        emit('change', newRange);
    });
</script>

<template>
    <VueDatePicker v-model="range" range />
</template>
  