<template>
  <base-modal v-if="showModal" @close="closeModal">
    // conditionally show modal-form or error
  <div class="habit-list">
    <header><h2>My Habits</h2></header>
    <section>
      <ul>
        <li v-for="habit in habits" :key="habit.id">
          <habit-list-item :habit="habit"></habit-list-item>
        </li>
      </ul>
    </section>
    <menu>
      <base-actions>
        <base-button>Add New Habit</base-button>
      </base-actions>
    </menu>
  </div>
</template>

<script>
import HabitListItem from './HabitListItem.vue';

export default {
  components: {
    HabitListItem,
  },
  data() {
    return {
      habits: [
        {
          id: new Date().toUTCString(),
          name: 'Morning Meditation',
          startDate: '4/4/22',
          days: [
            {
              date: '4/4/22',
              done: true,
            },
            {
              date: '4/5/22',
              done: true,
            },
            {
              date: '4/6/22',
              done: true,
            },
            {
              date: '4/7/22',
              done: false,
            },
            {
              date: '4/8/22',
              done: false,
            },
            {
              date: '4/9/22',
              done: true,
            },
            {
              date: '4/10/22',
              done: false,
            },
          ],
        },
        {
          id: new Date().toUTCString(),
          name: 'Morning Meditation',
          startDate: '4/4/22',
          days: [
            {
              date: '4/4/22',
              done: true,
            },
            {
              date: '4/5/22',
              done: true,
            },
            {
              date: '4/6/22',
              done: true,
            },
            {
              date: '4/7/22',
              done: false,
            },
            {
              date: '4/8/22',
              done: false,
            },
            {
              date: '4/9/22',
              done: true,
            },
            {
              date: '4/10/22',
              done: false,
            },
          ],
        },
      ],
      showModal: true,
    };
  },
  methods: {
    closeModal() {
      console.log('here');
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  padding-top: 1rem;
}

.habit-list {
  background-color: lightblue;
}

ul {
  padding: 1rem;
}

li {
  padding-bottom: 1rem;
}

li:last-child {
  padding: 0;
}
</style>
