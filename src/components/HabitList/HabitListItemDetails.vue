<template>
  <div class="habit-details">
    <h3>{{ name }}</h3>
    <div class="habit-start-date">{{ startDate }}</div>
    <base-actions>
      <base-button buttonStyle="icon"><fa-icon icon="edit"></fa-icon> </base-button>
      <base-button buttonStyle="icon"><fa-icon icon="trash-can"></fa-icon></base-button>
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
