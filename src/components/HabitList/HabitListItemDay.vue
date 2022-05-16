<template>
  <div class="day">
    <div class="status" @click="processToggle">
      <fa-icon class="done" v-if="day.done" icon="circle-check" size="2x"></fa-icon>
      <fa-icon v-else icon="circle" size="2x"></fa-icon>
    </div>
    <div class="date">{{ getShortDate() }}</div>
  </div>
</template>

<script>
export default {
  props: ['day', 'toggleDay'],
  methods: {
    getShortDate() {
      const date = new Date(this.day.date).toISOString().substr(0, 10);
      return date.split('-').splice(1, 2).join('/');
    },
    processToggle() {
      this.toggleDay(this.day.date);
    },
  },
};
</script>

<style scoped>
.day {
  text-align: center;
  cursor: pointer;
  color: #999;
  font-size: 1.25rem;
}

.status {
  padding-bottom: 0.5rem;
  color: #ccc;
}

.done {
  color: var(--day-complete-color);
}

.date {
  font-size: 0.75rem;
}
</style>
