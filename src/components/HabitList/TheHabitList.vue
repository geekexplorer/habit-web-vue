<template>
  <div class="habit-list">
    <base-modal v-if="modalType === 'createHabit'" @closeModal="closeModal()">
      <habit-form :submitForm="createNewHabit" :close="closeModal" title="Create New Habit"> </habit-form>
    </base-modal>
    <base-modal v-if="modalType === 'updateHabit'" @closeModal="closeModal()">
      <habit-form :submitForm="updateHabit" :close="closeModal" title="Update Habit" :habit="habitToUpdate">
      </habit-form>
    </base-modal>
    <base-modal v-if="modalType === 'deleteHabit'" @closeModal="closeModal()">
      <div>
        <h3>Are you sure you want to delete {{ habitToDelete.name }}?</h3>
      </div>

      <menu>
        <base-actions>
          <base-button @click="closeModal()"> Back </base-button>
          <base-button @click="deleteHabit(habitToDelete.id)">Delete</base-button>
        </base-actions>
      </menu>
    </base-modal>

    <header>
      <h2>My Habits</h2>
    </header>
    <section>
      <ul>
        <li v-for="habit in habits" :key="habit.id">
          <habit-list-item :habit="habit" :deleteHabit="processDelete" :updateHabit="processUpdate"></habit-list-item>
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

const createDays = (startDateString, duration) => {
  const msInDay = 8.64e7;
  const date = new Date(startDateString);
  const dateInMs = date.getTime();

  const days = [];

  for (let x = 0; x < duration; x++) {
    days.push({ date: new Date(dateInMs + msInDay * x).toISOString().substr(0, 10), done: false });
  }

  return days;
};

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
          startDate: '2022-04-04T07:00:00.000Z',
          duration: 7,
          days: [
            {
              date: '2022-04-05T07:00:00.000Z',
              done: true,
            },
            {
              date: '2022-04-06T07:00:00.000Z',
              done: true,
            },
            {
              date: '2022-04-07T07:00:00.000Z',
              done: true,
            },
            {
              date: '2022-04-08T07:00:00.000Z',
              done: false,
            },
            {
              date: '2022-04-09T07:00:00.000Z',
              done: false,
            },
            {
              date: '2022-04-10T07:00:00.000Z',
              done: true,
            },
            {
              date: '2022-04-11T07:00:00.000Z',
              done: false,
            },
          ],
        },
        {
          id: new Date().toUTCString(),
          name: 'Make sure to do this thing every day.',
          startDate: '4/4/22',
          duration: 7,
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
      habitToDelete: null,
    };
  },
  methods: {
    closeModal() {
      this.modalType = null;
    },
    showCreateHabitModal() {
      this.modalType = 'createHabit';
    },
    createNewHabit(habit) {
      const newHabit = {
        id: new Date().toUTCString(),
        name: habit.name,
        startDate: habit.startDate,
        duration: habit.duration,
        days: createDays(habit.startDate, habit.duration),
      };

      this.habits.push(newHabit);
      this.modalType = null;
    },
    processUpdate(id) {
      const habit = this.habits.find((h) => h.id === id);
      this.habitToUpdate = habit;
      this.modalType = 'updateHabit';
    },
    updateHabit(updatedHabitData) {
      const orig = this.habits.find((h) => h.id === updatedHabitData.id);
      orig.name = updatedHabitData.name;

      if (orig.startDate != updatedHabitData.startDate || orig.duration != updatedHabitData.duration) {
        orig.days = createDays(updatedHabitData.startDate, updatedHabitData.duration);
      }

      orig.startDate = updatedHabitData.startDate;
      orig.duration = updatedHabitData.duration;
      this.modalType = null;
    },
    processDelete(habit) {
      this.habitToDelete = habit;
      this.modalType = 'deleteHabit';
    },
    deleteHabit(id) {
      console.log('here');
      const indexToDelete = this.habits.findIndex((h) => h.Id === id);
      this.habits.splice(indexToDelete, 1);
      this.modalType = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  font-weight: bold;
}

ul {
  padding: 0 1rem;
  min-height: 2rem;
}

li {
  padding-bottom: 1rem;
}

li:last-child {
  padding: 0;
}
</style>
