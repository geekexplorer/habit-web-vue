<template>
  <div class="day">
    <div class="status">
      <fa-icon class="done" v-if="day.done" icon="circle-check" size="2x"></fa-icon>
      <fa-icon v-else icon="circle" size="2x"></fa-icon>
    </div>
    <div class="date">{{ shortDate(day.date) }}</div>
  </div>
</template>

<script>
export default {
  props: ['day'],
  methods: {
    shortDate(date) {
      return date.split('/').splice(1, 2).join('/');
    },
  },
};
</script>

<style scoped>
.day {
  text-align: center;
  cursor: pointer;
  color: darkgray;
}

.status {
  padding-bottom: 0.5rem;
}

.done {
  color: yellow;
}

.date {
  font-size: 0.75rem;
}
</style>
