<template>
  <the-header></the-header>
  <main>
    <base-card>
      <the-habit-list></the-habit-list>
    </base-card>
  </main>

  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/Layout/TheHeader.vue';
import TheFooter from './components/Layout/TheFooter.vue';
import TheHabitList from './components/HabitList/TheHabitList.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    TheHabitList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.25rem;
}

main {
  margin: auto;
  width: 90%;
}
</style>
