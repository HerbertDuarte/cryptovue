<script setup>
import {getNomes} from "../assets/get-nomes"
import {formatToBRL} from "../assets/formata-brl"
import Variacao from "./Variacao.vue";
defineProps(["dados", "keys"])

</script>

<template>
     <table class="w-full">
        <tbody>
          <tr v-for="key in keys" :key="key" class="text-sm sm:text-base">
            <td class="py-2 pl-2 sm:pl-4 space-x-1 truncate">
              <strong class="hidden sm:inline-block">{{ dados[key].code }}</strong> 
              <p class="inline-block sm:hidden">{{ getNomes(dados[key].name)[0] }}</p> 
              <span class="text-zinc-400 text-xs hidden sm:inline-block">{{ getNomes(dados[key].name)[0] }}</span>
            </td>
            <td class="py-2  px-2 text-right">{{ formatToBRL(dados[key].ask) }}</td>
            
            <td class="py-2  pr-3 sm:pr-6 text-right">
              <Variacao :valor="dados[key].pctChange"/>
            </td>
          </tr>
        </tbody>
      </table>
</template>