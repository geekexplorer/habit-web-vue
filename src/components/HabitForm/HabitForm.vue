<template>
  <div>
    <header>
      <h2>Create A Habit</h2>
    </header>
    <form class="habit-form" @submit.prevent="processForm">
      <div class="form-div">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" ref="nameInput" />
        <div v-if="invalidName" class="error">You must enter a habit name.</div>
      </div>
      <div class="form-div">
        <label for="startDate">Start Date</label>
        <input type="date" name="startDate" id="startDate" ref="startDateInput" />
        <div v-if="invalidStartDate" class="error">You must enter a valid date.</div>
      </div>
      <div class="form-div">
        <label for="duration"
          >Duration <span>{{ enteredDuration || defaultDuration }} days</span></label
        >
        <input
          type="range"
          min="7"
          max="31"
          value="defaulDuration"
          ref="durationInput"
          @change="enteredDuration = $refs.durationInput.value"
        />
        <div v-if="invalidName" class="error">
          You must enter a duration of between 7 and 31 days.
        </div>
      </div>
      <base-actions>
        <base-button @click="exitForm">Back</base-button>
        <base-button type="submit">Create</base-button>
      </base-actions>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    submitForm: {
      type: Function,
      required: false,
    },
    exitForm: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      defaultDuration: 7,
      name: '',
      startDate: new Date().toLocaleDateString(),
      enteredDuration: this.defaultDuration,
      invalidName: false,
      invalidStartDate: false,
      invalidDuration: false,
    };
  },
  methods: {
    processForm() {
      const enteredName = this.$refs.nameInput.value.trim();
      const enteredStartDate = this.$refs.startDateInput.value.trim();
      const enteredDuration = this.$refs.durationInput.value;

      const formIsValid = this.validateForm(enteredName, enteredStartDate, enteredDuration);

      if (!formIsValid) {
        return;
      }

      this.submitForm({
        name: enteredName,
        startDate: enteredStartDate,
        duration: enteredDuration,
      });
    },
    validateForm(name, startDate, duration) {
      name, startDate, duration;

      let isFormValid = true;

      if (name.length <= 0) {
        this.invalidName = true;
        isFormValid = false;
      }

      if (startDate.length <= 0) {
        this.invalidStartDate = true;
        isFormValid = false;
      }

      if (duration < this.defaultDuration || duration > this.maxDuration) {
        this.invalidDuration = true;
        isFormValid = false;
      }

      return isFormValid;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
  padding-bottom: 1rem;
}

.habit-form {
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  width: 20rem;
  row-gap: 1rem;
}

.habit-form > .form-div {
  justify-content: space-between;
}

label {
  display: block;
  font-weight: bold;
  width: 100%;
}

input {
  border: 1px solid black;
  width: 100%;
  font-size: 1.25rem;
}

input[type='range'] {
  padding: -5px;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  height: 1rem;
  border-radius: 5px;
  background-repeat: no-repeat;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #ccc;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

div.error {
  margin-top: 0.5rem;
  padding: 0.25rem;
  font-size: 0.8rem;
}

.error {
  background-color: pink;
  color: red;
}

label span {
  float: right;
  font-weight: normal;
  color: #aaa;
}
</style>
