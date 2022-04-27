<template>
  <button :class="buttonStyle ? buttonStyle : 'basic'" :type="type ? type : 'button'">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'buttonStyle'],
};
</script>

<style scoped>
button {
  display: inline-block;
  cursor: pointer;
}

button.basic {
  background-color: var(--button-color);
  border-radius: var(--button-border-radius);
  padding: 0.4rem 0.5rem;
  font-weight: bold;
  box-shadow: 2px 8px 4px -6px var(--box-shadow-color);
}

button.back {
  padding: 0.4rem 0.5rem;
}

button.icon {
  background-color: transparent;
  color: #ccc;
  padding: 0rem;
  font-size: 0.8rem;
}
</style>
