<template>
  <div class="habit-list">
    <base-modal v-if="modalType" @close="closeModal">
      <habit-form
        v-if="modalType === 'createHabit'"
        :createNewHabit="createNewHabit"
        :exitForm="closeModal"
      >
      </habit-form>
    </base-modal>

    <header>
      <h2>My Habits</h2>
    </header>
    <section>
      <ul>
        <li v-for="habit in habits" :key="habit.id">
          <habit-list-item :habit="habit"></habit-list-item>
        </li>
      </ul>
    </section>
    <menu>
      <base-actions>
        <base-button @click="showCreateHabitModal">Add New Habit</base-button>
      </base-actions>
    </menu>
  </div>
</template>

<script>
import HabitListItem from './HabitListItem.vue';
import HabitForm from '../HabitForm/HabitForm.vue';

export default {
  components: {
    HabitListItem,
    HabitForm,
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
          name: 'Make sure to do this thing every day.',
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
      modalType: null,
    };
  },
  methods: {
    closeModal() {
      this.modalType = null;
    },
    showCreateHabitModal() {
      this.modalType = 'createHabit';
    },
    createNewHabit(name, startDate, duration) {
      console.log('create: ', name, startDate, duration);
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  font-weight: bold;
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
