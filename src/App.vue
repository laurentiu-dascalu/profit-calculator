<script setup>
import TheForm from "./components/TheForm.vue";
import TheProfit from "./components/TheProfit.vue";

import { useProfitStore } from "./stores/profit";

</script>

<template>
  <div class="container">
    <header>
      <h1>Profit calculator - Visma</h1>
    </header>

    <main>
      <TheForm
        v-model:price="price"
        v-model:cost="cost"
        v-model:discount="discount"
        v-model:enableDiscount="enableDiscount"
      />
      <TheProfit v-model:showProfit="showProfit" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 0,
      cost: 0,
      discount: 0,
      enableDiscount: false,
      profit: 0,
    };
  },
  computed: {
    showProfit() {
      //Profit = Price * (100 - discount) / 100 - Cost
      if (this.enableDiscount) {
        this.profit = (this.price * (100 - this.discount)) / 100 - this.cost;
      } else {
        this.profit = this.price - this.cost;
      }
      
      const store = useProfitStore();
      store.changeProfit(Number(this.profit.toFixed(2)));

      return Number(this.profit.toFixed(2));
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 800px;
  width: 90%;
}
header {
  margin: 50px 0px 30px;
  border-radius: 10px;
  padding: 15px;
  background-color: #dd003e;
  color: white;
  text-align: center;
}
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media only screen and (max-width: 450px){
    h1{
        font-size: 24px;
    }
}
</style>
