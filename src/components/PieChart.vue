<script setup>
import { Pie } from "vue-chartjs";
import { ref } from "vue";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const props = defineProps(["data"]);
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
  <Pie :data="chartData" :options="options" />
</template>
