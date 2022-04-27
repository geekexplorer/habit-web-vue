<template>
  <div class="habit-details">
    <h2>{{ habit.name }}</h2>
    <div class="habit-start-date">{{ getDateString() }}</div>
    <base-actions>
      <base-button buttonStyle="icon"><fa-icon icon="edit" @click="processUpdate"></fa-icon> </base-button>
      <base-button buttonStyle="icon"><fa-icon icon="trash-can" @click="processDelete"></fa-icon></base-button>
    </base-actions>
  </div>
</template>

<script>
export default {
  props: ['habit', 'deleteHabit', 'updateHabit'],
  methods: {
    getDateString() {
      const isoDate = new Date(this.habit.startDate).toISOString().substring(0, 10);
      let dateParts = isoDate.split('-').map((m) => +m);
      const year = dateParts.splice(0, 1);
      dateParts.push(year);
      return dateParts.join('/');
    },
    processDelete() {
      this.deleteHabit(this.habit.id);
    },
    processUpdate() {
      this.updateHabit(this.habit.id);
    },
  },
};
</script>

<style scoped>
h2 {
  font-weight: 500;
  padding: 0.5rem;
}

.habit-details {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 0.5rem;
  width: 12rem;
  min-width: 12rem;
  text-align: center;
  overflow: hidden;
}

.habit-start-date {
  font-size: 0.8rem;
}
</style>
