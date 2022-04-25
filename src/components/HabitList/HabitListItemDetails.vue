<template>
  <div class="habit-details">
    <h3>{{ name }}</h3>
    <div class="habit-start-date">{{ startDate }}</div>
    <base-actions>
      <base-button buttonStyle="icon">Edit</base-button>
      <base-button buttonStyle="icon">Delete</base-button>
    </base-actions>
  </div>
</template>

<script>
export default {
  props: ['name', 'startDate'],
};
</script>

<style scoped>
div.habit-details {
  display: flex;
  flex-flow: column nowrap;
  background-color: #ccc;
}
</style>
