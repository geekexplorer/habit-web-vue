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
  border-radius: 7px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  width: fit-content;
  min-width: 25rem;
}

div.habit-list-item {
}
</style>
