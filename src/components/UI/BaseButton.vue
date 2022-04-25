<template>
  <button :class="buttonStyle ? buttonStyle : 'basic'">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: ['buttonStyle'],
};
</script>

<style scoped>
button {
  display: inline-block;
  cursor: pointer;
}

button.basic {
  background-color: burlywood;
  padding: 0.4rem 0.5rem;
}

button.icon {
  background-color: transparent;
  color: silver;
  padding: 0rem;
}
</style>
