<script setup>
import { TrendingUp, TrendingDown, MoveRight} from 'lucide-vue-next';
defineProps(["valor"])
</script>
<template>
    <span class="text-green-600 whitespace-nowrap text-nowrap" v-if="Number(valor) > 0">
        <TrendingUp class="inline pr-1.5"/>{{ Number(valor).toFixed(2) }}%
    </span>
    <span class="text-purple-600" v-if="Number(valor) == 0">
        <MoveRight class="inline pr-1.5"/>{{ Number(valor).toFixed(2) }}%
    </span>
    <span class="text-red-600" v-if="Number(valor) < 0">
        <TrendingDown class="inline pr-1.5"/>{{ Number(valor).toFixed(2) }}%
    </span>
</template>