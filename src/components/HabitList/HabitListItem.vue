<template>
  <base-card cardType="habit-list-item">
    <habit-list-item-details
      :id="habit.id"
      :name="habit.name"
      :startDate="habit.startDate"
      :deleteHabit="deleteHabit"
    ></habit-list-item-details>
    <habit-list-item-days :days="habit.days"></habit-list-item-days>
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
}
</style>
