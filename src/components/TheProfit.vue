<script setup>
import { useProfitStore } from "../stores/profit";
const store = useProfitStore();
</script>
<template>
  <section id="profit">
    <h2>Profit</h2>
    <p class="profitNumber">{{ store.profit }}</p>
    <!-- <p class="profitNumber">{{ showProfit }}</p> -->
  </section>
</template>

<script>
export default {
   props: {
     showProfit: Number,
   }
};
</script>

<style scoped>
#profit {
  background-color: white;
  border-radius: 10px;
  padding: 2em 1em;
  text-align: center;
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  font-size: 20px;
}
.profitNumber {
  font-size: 30px;
}

@media only screen and (max-width: 680px) {
  #profit {
    width: 50%;
    margin: 20px auto;
  }
}
@media only screen and (max-width: 450px) {
  #profit {
    width: 100%;
  }
}
</style>
