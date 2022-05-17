<template>
  <base-modal v-if="modalType === 'createHabit'" @closeModal="closeModal()">
    <habit-form
      :submitForm="createNewHabit"
      :close="closeModal"
      title="Create New Habit"
    >
    </habit-form>
  </base-modal>
  <base-modal v-if="modalType === 'updateHabit'" @closeModal="closeModal()">
    <habit-form
      :submitForm="updateHabit"
      :close="closeModal"
      title="Update Habit"
      :habit="habitToUpdate"
    >
    </habit-form>
  </base-modal>
  <base-modal v-if="modalType === 'deleteHabit'" @closeModal="closeModal()">
    <base-confirmation :close="closeModal">
      <template #header>
        <h3>
          Are you sure you want to delete <br /><strong>{{
            habitToDelete.name
          }}</strong
          >?
        </h3>
      </template>
      <template #actions>
        <base-button @click="closeModal" buttonStyle="quit">Back</base-button>
        <base-button @click="deleteHabit(habitToDelete.id)">Delete</base-button>
      </template>
    </base-confirmation>
  </base-modal>
  <base-modal v-if="modalType === 'error'" @closeModal="closeModal()">
    <base-confirmation :close="closeModal">
      <template #header>
        <strong>
          <h3>An error occurred.</h3>
          <br />
        </strong>
      </template>
      <p>{{ error }}</p>
      <template #actions>
        <base-button @click="closeModal">Ok</base-button>
      </template>
    </base-confirmation>
  </base-modal>

  <div class="habit-list" v-cloak>
    <header>
      <h2>My Habits</h2>
    </header>
    <section>
      <ul>
        <li v-for="habit in habits" :key="habit.id + habit.title">
          <habit-list-item
            :habit="habit"
            :deleteHabit="processDelete"
            :updateHabit="processUpdate"
            :updateDay="updateDay"
          ></habit-list-item>
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
import HabitListItem from "./HabitListItem.vue";
import HabitForm from "../HabitForm/HabitForm.vue";
import BaseConfirmation from "../UI/BaseConfirmation.vue";

import HabitService from "../../services/HabitService";

const createDays = (startDateString, duration) => {
  const msInDay = 8.64e7;
  const date = new Date(startDateString);
  const dateInMs = date.getTime();

  const days = [];

  for (let x = 0; x < duration; x++) {
    days.push({
      date: new Date(dateInMs + msInDay * x).toISOString().substr(0, 10),
      done: false,
    });
  }

  return days;
};

export default {
  components: {
    HabitListItem,
    HabitForm,
    BaseConfirmation,
  },

  async created() {
    try {
      const response = await fetch("http://10.0.0.12:5091/api/habit");
      if (!response.ok) {
        throw new Error("something went wrong");
      }

      const data = await response.json();
      this.habits = data;
    } catch (err) {
      console.log(err);
    }
  },

  data() {
    return {
      habits: [],
      modalType: null,
      habitToDelete: null,
      habitToUpdate: null,
      error: null,
    };
  },
  methods: {
    closeModal() {
      this.modalType = null;
    },
    showCreateHabitModal() {
      this.modalType = "createHabit";
    },
    async createNewHabit(habit) {
      const newHabitData = {
        name: habit.name,
        startDate: habit.startDate,
        duration: habit.duration,
        days: createDays(habit.startDate, habit.duration),
      };

      try {
        const newHabit = HabitService.addHabit(newHabitData);
        this.habits.unshift(newHabit);
        this.modalType = null;
      } catch (err) {
        this.modalType = "error";
        this.error = err.message;
      }
    },
    processUpdate(id) {
      const habit = this.habits.find((h) => h.id === id);
      this.habitToUpdate = habit;
      this.modalType = "updateHabit";
    },
    async updateDay(habit) {
      console.log(habit);
      await this.updateHabit(habit);
    },

    async updateHabit(updatedHabitData) {
      const existingHabit = this.habits.find(
        (h) => h.id === updatedHabitData.id
      );
      existingHabit.name = updatedHabitData.name;

      if (
        existingHabit.startDate != updatedHabitData.startDate ||
        existingHabit.duration != updatedHabitData.duration
      ) {
        existingHabit.days = createDays(
          updatedHabitData.startDate,
          updatedHabitData.duration
        );
      }

      existingHabit.startDate = updatedHabitData.startDate;
      existingHabit.duration = updatedHabitData.duration;

      try {
        HabitService.updateHabit(existingHabit);
        this.modalType = null;
        this.habitToUpdate = null;
      } catch (err) {
        this.error = err.message;
      }
    },

    processDelete(id) {
      const habit = this.habits.find((h) => h.id === id);
      this.habitToDelete = habit;
      this.modalType = "deleteHabit";
    },

    async deleteHabit(id) {
      try {
        HabitService.deleteHabit(id);
        this.habits = this.habits.filter((h) => h.id !== id);
        this.habitToDelete = null;
        this.modalType = null;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

section {
  min-width: 500px;
}
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

p {
  text-align: center;
}
</style>
