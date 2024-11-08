<script setup>
    import { Bar } from 'vue-chartjs';
    import { ref } from "vue";
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

    const props = defineProps(['data']);
    const chartData = ref(props.data);

    const options = ref({
        responsive: true,
        plugins: {
        legend: {
            display: true,
        },
        },
    });
</script>

<template>
    <Bar :data="chartData" :options="options" />
</template>
  