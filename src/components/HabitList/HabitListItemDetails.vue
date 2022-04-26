<template>
  <div class="habit-details">
    <h3>{{ name }}</h3>
    <div class="habit-start-date">{{ getDateString() }}</div>
    <base-actions>
      <base-button buttonStyle="icon"><fa-icon icon="edit"></fa-icon> </base-button>
      <base-button buttonStyle="icon"><fa-icon icon="trash-can" @click="processDelete"></fa-icon></base-button>
    </base-actions>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'startDate', 'deleteHabit'],
  methods: {
    getDateString() {
      const isoDate = new Date(this.startDate).toISOString().substring(0, 10);
      let dateParts = isoDate.split('-').map((m) => +m);
      const year = dateParts.splice(0, 1);
      dateParts.push(year);
      return dateParts.join('/');
    },
    processDelete() {
      this.deleteHabit(this.id);
    },
  },
};
</script>

<style scoped>
.habit-details {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 0.5rem;
  width: 17rem;
  min-width: 6rem;
  text-align: center;
  overflow: hidden;
}

.habit-start-date {
  font-size: 0.8rem;
}
</style>
