<script setup>
import { ArrowRight } from "lucide-vue-next";
import {formatToBRL, formatToBRLInput} from "../assets/formata-brl"
import { getNomes } from "../assets/get-nomes";
import { ref, computed} from 'vue';
const props = defineProps(["dolarToReal"])

const real = ref("1,00");
const dolar = computed(()=> {
  const realValue = real.value.replace(".", "").replace(",", ".");
  return  Number(realValue) / props.dolarToReal.ask
});

function handleInput(event) {
  const value = event.target.value;
  real.value = formatToBRLInput(value); 
}

</script>

<template>
    <div v-if="dolarToReal" class="flex items-center w-full gap-2 sm:gap-4  max-w-[700px] text-base sm:text-xl">    
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="font-bold sm:hidden inline-block">{{  getNomes(dolarToReal.name)[1].split(" ")[0] }}</h2>
        <h2 class="font-bold hidden sm:inline-block">{{  getNomes(dolarToReal.name)[1] }}</h2>
        <div class="w-full flex gap-2 text-xl sm:text-2xl">
          <span>R$</span>
          <input 
            class="flex-1 w-0 border-0 focus:outline-none" 
            type="text"
            name="real"
            id="real"
            v-model="real"
            @input="handleInput">
        </div>
      </div>      
      <ArrowRight/>
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="font-bold sm:hidden inline-block">{{  getNomes(dolarToReal.name)[0].split(" ")[0] }}</h2>
        <h2 class="font-bold hidden sm:inline-block">{{  getNomes(dolarToReal.name)[0] }}</h2>
        <p class="text-xl sm:text-2xl">{{ formatToBRL(dolar) }}</p>
      </div>
    </div>
</template>