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
@import url('https://fonts.googleapis.com/css2?family=Calligraffitti&family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

:root {
  /* Color Variables */
  --font-color: #322329;
  --background-color: white;
  --habit-color: #277da1ff;
  --thumb-color: #277da1ff;
  --title-color: #f8961eff;
  --habit-border-color: #277da1ff;
  --button-color: #7fc96bff;
  --day-complete-color: #ffd043ff;
  --day-incomplete-color: lightslategray;
  --error-color: rgba(230, 50, 50, 0.5);
  --box-shadow-color: hsla(0, 0%, 0%, 0.3);

  --div-border-radius: 230px 15px 225px 15px/15px 225px 15px 10px;
  --button-border-radius: 255px 15px 225px 15px/15px 225px 15px 10px;
}

html {
  font-family: 'Shadows Into Light', 'Roboto', sans-serif;
}

body {
  margin: 0;
  font-size: 16px;
  background-color: #eee;
  color: var(--font-color);
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

[v-cloak] {
  display: none;
}
</style>
