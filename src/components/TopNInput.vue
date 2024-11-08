<script setup>
    import { ref, watch } from 'vue';
    const topN = ref(5);
  
    const emit = defineEmits(['input']);
    watch(topN, () => emit('input', topN.value));
</script>

<template>
    <input type="number" v-model="topN" min="1" placeholder="Top N" />
</template>