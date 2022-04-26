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
.habit-details {
  display: flex;
  flex-flow: column nowrap;
  background-color: #ccc;
  row-gap: 0.5rem;
  width: 17rem;
  min-width: 5rem;
  text-align: center;
  overflow: hidden;
}

.habit-start-date {
  font-size: 0.8rem;
}
</style>
