<template>
  <div class="day">
    <div>{{ day.done }}</div>
    <div>{{ shortDate(day.date) }}</div>
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
}
</style>
