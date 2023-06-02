<script setup>
import TheInput from "../UI/TheInput.vue";
import TheSwitch from "../UI/TheSwitch.vue";
</script>

<template>
  <form id="inputs">
    <TheInput>
      <template #label>Price</template>
      <template #input>
        <input
          id="price"
          name="price"
          type="number"
          :value="price"
          @input="$emit('update:price', Number($event.target.value))"
        />
      </template>
    </TheInput>
    <TheInput>
      <template #label>Cost</template>
      <template #input>
        <input
          id="cost"
          name="cost"
          type="text"
          :value="cost"
          @input="$emit('update:cost', Number($event.target.value))"
        />
      </template>
    </TheInput>
    <TheInput>
      <template #label>Discount (%)</template>
      <template #input>
        <input
          id="discount"
          name="discount"
          type="text"
          :value="discount"
          @input="$emit('update:discount', Number($event.target.value))"
          :disabled="!enableDiscount"
        />
      </template>
    </TheInput>
    <TheSwitch>
      <template #label>Enable discount</template>
      <template #input>
        <input
          id="enableDiscount"
          name="discount"
          type="checkbox"
          :value="enableDiscount"
          @input="$emit('update:enableDiscount', $event.target.checked)"
        />
      </template>
    </TheSwitch>
  </form>
</template>

<script>
export default {
  props: {
    price: Number,
    cost: Number,
    discount: Number,
    enableDiscount: Boolean,
  },
  emits: [
    "update:price",
    "update:cost",
    "update:discount",
    "update:enableDiscount",
  ],
};
</script>

<style scoped>
#inputs {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}
input {
  padding: 5px;
  width: 100%;
}

@media only screen and (max-width: 680px) {
  #inputs {
    width: 100%;
  }
}
@media only screen and (max-width: 450px) {
  #inputs {
    display: block;
  }
  fieldset {
    margin-bottom: 10px;
  }
}
</style>
