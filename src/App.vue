<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
import Tabela from './components/Tabela.vue';
import {getData} from "./assets/get-data"
import Conversor from './components/Conversor.vue';

const ultimaAtualizacao = ref("");
const keys = ref([]);
const dados = ref({})

async function defineData(){
  const data = await getData();
  keys.value = Object.keys(data);
  dados.value = data;
  ultimaAtualizacao.value = new Date().toLocaleDateString() + " às " + new Date().toLocaleTimeString();
}

const beat = setInterval(async() => {
  await defineData();
}, 30000);


onMounted(async() => {
  await defineData();
});

onUnmounted(() => {
  clearInterval(beat);
});
</script>

<template>
  <header class="px-2 sm:px-6 pt-20 pb-4 max-w-[800px] mx-auto">
    <h1 class="text-3xl font-bold">🪙 cryptovue</h1>
  </header>
  <main class="flex flex-col gap-6 items-center justify-center py-4 px-2 sm:px-6">
    <div class="w-full border rounded-lg  max-w-[700px]">
     <Tabela :dados="dados" :keys="keys"/>
     <p class="p-4 text-xs">Última atualização: {{ ultimaAtualizacao }}</p>
    </div>

    <Conversor :dolarToReal="dados['USDBRL']"/>
  </main>
</template>
