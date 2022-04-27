<template>
  <div class="container">
    <span><slot name="header"></slot></span>
    <div class="message">
      <slot></slot>
    </div>
    <base-actions>
      <slot name="actions">
        <base-button @click="$emit('closeConfirmation')">Ok</base-button>
      </slot>
    </base-actions>
  </div>
</template>

<script>
export default {
  props: ['close'],
  emits: ['closeConfirmation'],
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.message {
  padding-bottom: 1rem;
}

span {
  text-align: center;
}
</style>
