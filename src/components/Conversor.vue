<script setup>
import { ArrowRight } from "lucide-vue-next";
import {formatToBRL, formatToBRLInput} from "../assets/formata-brl"
import { getNomes } from "../assets/get-nomes";
import Variacao from "./Variacao.vue";
import { ref, computed} from 'vue';
const props = defineProps(["dolarToReal"])

const dolar = ref("1,00");
const real = computed(()=> {
  const dolarValue = dolar.value.replace(".", "").replace(",", ".");
  return Number(dolarValue) * props.dolarToReal.ask
});

function handleInput(event) {
  const value = event.target.value;
  dolar.value = formatToBRLInput(value); 
}


</script>

<template>

    <div v-if="dolarToReal" class="flex items-center w-full gap-4  max-w-[700px]">    
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="text-xl font-bold">{{ getNomes(dolarToReal.name)[0] }}</h2>
        <div class="w-full flex gap-2 text-2xl">
          <span>U$</span>
          <input 
            class="flex-1 w-0 border-0 focus:outline-none" 
            type="text"
            name="real"
            id="real"
            v-model="dolar"
            @input="handleInput">
        </div>
      </div>
      
      <ArrowRight/>
      
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="text-xl font-bold">{{  getNomes(dolarToReal.name)[1] }}</h2>

        <p class="text-2xl">{{ formatToBRL(real) }}</p>
      </div>
    </div>
</template>