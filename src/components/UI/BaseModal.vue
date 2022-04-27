<template>
  <teleport to="body">
    <div @click="close"></div>
    <dialog open>
      <slot></slot>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emits: ['closeModal'],
  methods: {
    close() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  width: fit-content;
  z-index: 100;
  margin: 0;
  overflow: hidden;
  background-color: white;
  border-radius: var(--div-border-radius);
  box-shadow: 2px 8px 4px -6px var(--box-shadow-color);
}

header {
  text-align: center;
  padding-bottom: 2rem;
}
</style>
