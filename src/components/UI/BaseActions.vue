<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['justify'],
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  justify-content: center;
  width: 100%;
  align-items: center;
}
</style>
