<template>
  <base-card cardType="habit-list-item">
    <habit-list-item-details
      :habit="habit"
      :deleteHabit="deleteHabit"
      :updateHabit="updateHabit"
    ></habit-list-item-details>
    <habit-list-item-days :days="habit.days" :toggleDay="toggleDay"></habit-list-item-days>
  </base-card>
</template>

<script>
import HabitListItemDetails from './HabitListItemDetails.vue';
import HabitListItemDays from './HabitListItemDays.vue';

export default {
  components: {
    HabitListItemDetails,
    HabitListItemDays,
  },
  props: {
    habit: {
      type: Object,
      required: true,
    },
    deleteHabit: {
      type: Function,
      required: true,
    },
    updateHabit: {
      type: Function,
      required: true,
    },
  },
  methods: {
    toggleDay(date) {
      const day = this.habit.days.find((d) => d.date === date);
      day.done = !day.done;
    },
  },
};
</script>

<style scoped>
.habit-list-item {
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 2rem;
  min-width: 20rem;
  background-color: whitesmoke;
  margin: 0 1rem;
  border-radius: var(--div-border-radius);
  box-shadow: 2px 8px 4px -6px var(--box-shadow-color);
}
</style>
