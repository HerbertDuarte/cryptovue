<script setup>
import { ArrowRight } from "lucide-vue-next";
import {formatToBRL} from "../assets/formata-brl"
import { getNomes } from "../assets/get-nomes";
import Variacao from "./Variacao.vue";

defineProps(["dolarToReal"])
</script>

<template>

    <div v-if="dolarToReal" class="flex items-center w-full gap-4  max-w-[700px]">    
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="text-xl font-bold">{{ getNomes(dolarToReal.name)[1] }}</h2>
        <p class="text-2xl">{{ formatToBRL(1) }}</p>
        <p class="text-right">
          <Variacao :valor="0"/>
        </p>
      </div>
      
      <ArrowRight/>
      
      <div class="border rounded-lg p-4 mt-4 w-full max-w-[200px]">
        <h2 class="text-xl font-bold">{{  getNomes(dolarToReal.name)[0] }}</h2>

        <p class="text-2xl">{{ formatToBRL(dolarToReal.ask) }}</p>
        
        <p class="text-right">
          <Variacao :valor="dolarToReal.pctChange"/>
        </p>
      </div>
    </div>
</template>