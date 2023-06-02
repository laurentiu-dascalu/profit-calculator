import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfitStore = defineStore("profit", () => {
  const profit = ref(0);
  function changeProfit(newProfit) {
    profit.value = newProfit;
  }

  return { profit, changeProfit };
});
