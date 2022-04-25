<template>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header"></slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <base-actions>
            <base-button @click="close">Ok</base-button>
          </base-actions>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emits: ['close'],
  methods: {
    close() {
      console.log('here');
      this.$emit('close');
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
  left: 10%;
  width: 80%;
  z-index: 100;
  padding: 2rem;
  margin: 0;
  overflow: hidden;
  background-color: white;
}
</style>
