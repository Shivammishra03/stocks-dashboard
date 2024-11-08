<script setup>
    import { ref, watch } from 'vue';
    import { generateDummyStockData, getTopNStocks } from '@/services/dummyDataService';
    import { getUserRole } from '@/services/authService';
    import LineChart from '@/components/LineChart.vue';
    import BarChart from '@/components/BarChart.vue';
    import PieChart from '@/components/PieChart.vue';
    import ChartDropdown from '@/components/ChartDropdown.vue';
    import DateRangePicker from '@/components/DateRangePicker.vue';
    import TopNInput from '@/components/TopNInput.vue';
    import ExportButton from '@/components/ExportButton.vue'
    import ThemeToggle from '@/components/ThemeToggle.vue'
  
    const chartOptions = ref(['line', 'bar', 'pie']);
    const selectedChart = ref('line');
    const userRole = ref(getUserRole());
    const topN = ref(5);

    watch(selectedChart, (newChartType) => {
        console.log("Selected chart type:", newChartType);
    });
  
    const dateRange = ref({
        start: '2024-01-01',
        end: '2024-01-12',
    });
  
    const chartData = ref({
        labels: [],
        datasets: [],
    });
  
    const updateDateRange = (newRange) => {
        dateRange.value = newRange;
        fetchChartData();
    };
  
    const updateTopN = (n) => {
        topN.value = n;
        fetchChartData();
    };
  
    const fetchChartData = () => {
        const rawData = generateDummyStockData(dateRange.value.start, dateRange.value.end);
        const topStocksData = getTopNStocks(rawData, topN.value);
    
        chartData.value = {
            labels: topStocksData.map(item => item.date),
            datasets: [{
                label: 'Top Stock Prices',
                data: topStocksData.map(item => item.prices[0]),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },],
        };
    };
    fetchChartData();
</script>

<template>
    <ThemeToggle />
    <ChartDropdown :options="chartOptions" v-model="selectedChart" />
    <DateRangePicker @change="updateDateRange" />
    <TopNInput @input="updateTopN" />
    <LineChart v-if="selectedChart === 'line'" :data="chartData" />
    <ExportButton v-if="selectedChart === 'line'" :data="chartData" />
    <BarChart v-if="selectedChart === 'bar'" :data="chartData" />
    <ExportButton v-if="selectedChart === 'bar'" :data="chartData" />
    <PieChart v-if="selectedChart === 'pie'" :data="chartData" />
    <ExportButton v-if="selectedChart === 'pie'" :data="chartData" />
</template>
  