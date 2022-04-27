<template>
  <div :class="`${cardType ? cardType : 'base-card'}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['cardType'],
  data() {
    return {};
  },
};
</script>

<style scoped>
div.base-card {
  box-shadow: 0 2px 8px var(--box-shadow-color);
  padding: 1rem 0rem 2rem 0rem;
  margin: 2rem auto;
  width: fit-content;
  background-color: white;
  border-radius: var(--button-border-radius);
}
</style>
