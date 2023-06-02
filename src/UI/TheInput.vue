<template>
  <fieldset>
    <label>
      <slot name="label"></slot>
    </label>
    <slot name="input"></slot>
  </fieldset>
</template>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;
}

label {
  margin-bottom: 3px;
}
</style>
