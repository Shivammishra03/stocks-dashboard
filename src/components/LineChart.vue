<script setup>
import { Line } from "vue-chartjs";
import { ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

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
  <div class="chartDetails">
    <Line :data="chartData" :options="options" />
  </div>
</template>
