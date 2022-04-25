<template>
  <div class="habit-list-item-days">
    <habit-list-item-day v-for="day in days" :key="day.date" :day="day"></habit-list-item-day>
  </div>
</template>

<script>
import HabitListItemDay from './HabitListItemDay.vue';

export default {
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  components: {
    HabitListItemDay,
  },
};
</script>

<style scoped>
.habit-list-item-days {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  background-color: #ccc;
}
</style>
