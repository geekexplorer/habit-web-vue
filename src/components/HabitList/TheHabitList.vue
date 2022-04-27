<template>
  <div class="habit-list" v-cloak>
    <base-modal v-if="modalType === 'createHabit'" @closeModal="closeModal()">
      <habit-form :submitForm="createNewHabit" :close="closeModal" title="Create New Habit"> </habit-form>
    </base-modal>
    <base-modal v-if="modalType === 'updateHabit'" @closeModal="closeModal()">
      <habit-form :submitForm="updateHabit" :close="closeModal" title="Update Habit" :habit="habitToUpdate">
      </habit-form>
    </base-modal>
    <base-modal v-if="modalType === 'deleteHabit'" @closeModal="closeModal()">
      <base-confirmation :close="closeModal">
        <template #header>
          <h3>
            Are you sure you want to delete <br /><strong>{{ habitToDelete.name }}</strong
            >?
          </h3>
        </template>
        <template #actions>
          <base-button @click="closeModal" buttonStyle="quit">Back</base-button>
          <base-button @click="deleteHabit(habitToDelete.id)">Delete</base-button>
        </template>
      </base-confirmation>
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
import BaseConfirmation from '../UI/BaseConfirmation.vue';

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
    BaseConfirmation,
  },
  data() {
    return {
      habits: [
        {
          id: '2022-04-04T07:00:00.000Z',
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
          id: '2022-04-05T07:00:00.000Z',
          name: 'Make sure to do this thing every day.',
          startDate: '2022-04-04T07:00:00.000Z',
          duration: 12,
          days: [
            {
              date: '2022-04-04T07:00:00.000Z',
              done: true,
            },
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
              done: false,
            },
            {
              date: '2022-04-08T07:00:00.000Z',
              done: false,
            },
            {
              date: '2022-04-09T07:00:00.000Z',
              done: true,
            },
            {
              date: '2022-04-10T07:00:00.000Z',
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
    processDelete(id) {
      const habit = this.habits.find((h) => h.id === id);
      this.habitToDelete = habit;
      this.modalType = 'deleteHabit';
    },
    deleteHabit(id) {
      this.habits = this.habits.filter((h) => h.id !== id);
      this.habitToDelete = null;
      this.modalType = null;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  font-weight: bold;
  width: fit-content;
  text-align: center;
  margin: auto;
  border-bottom: 2px solid black;
  border-radius: var(--div-border-radius);
}

ul {
  padding: 1rem 1rem 1rem 0;
  min-height: 2rem;
}

li {
  padding-bottom: 0.75rem;
}
</style>
