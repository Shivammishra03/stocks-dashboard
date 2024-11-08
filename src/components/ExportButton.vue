<script setup>
    import { ref } from 'vue';

    const props = defineProps(['data']);
  
    const exportData = () => {
        if (props.data && Array.isArray(props.data.labels) && Array.isArray(props.data.datasets)) {
            const { labels, datasets } = props.data;
            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Date," + datasets[0].label + "\n";
            labels.forEach((label, index) => {
                const row = [label];
                datasets.forEach(dataset => {
                    row.push(dataset.data[index]);
                });
                csvContent += row.join(",") + "\n";
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "chart_data.csv");
            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        } else {
            console.error("Unexpected data format. Expected Chart.js structure with `labels` and `datasets`.");
        }
    };
</script>

<template>
    <button @click="exportData">Export as CSV</button>
</template>
  