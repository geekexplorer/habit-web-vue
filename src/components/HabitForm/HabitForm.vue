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
        <input type="date" :value="enteredStartDate" ref="startDateInput" />
        <div v-if="invalidStartDate" class="error">You must enter a valid start date.</div>
      </div>
      <div class="form-div">
        <label for="duration"
          >Duration <span>{{ enteredDuration }} days</span></label
        >
        <input type="range" v-model="enteredDuration" min="7" max="31" />
      </div>
      <base-actions>
        <base-button @click="close">Back</base-button>
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
    close: {
      type: Function,
      required: true,
    },
    habit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      enteredName: this.habit?.name || '',
      enteredStartDate: this.habit?.startDate || new Date().toISOString().substring(0, 10),
      enteredDuration: this.habit?.duration || 7,
      invalidName: false,
      invalidStartDate: false,
    };
  },
  methods: {
    processForm() {
      const name = this.$refs.nameInput.value.trim();
      const startDate = this.$refs.startDateInput.value.trim();
      const duration = +this.enteredDuration;

      const formIsValid = this.validateForm(name, startDate);

      if (!formIsValid) {
        return;
      }

      this.submitForm({
        name: name,
        startDate: new Date(startDate).toISOString(),
        duration: duration,
      });
    },
    validateForm(name, startDate) {
      let isValid = true;
      if (name.lenght <= 0) {
        this.invalidName = true;
        isValid = false;
      }

      if (!startDate || startDate.length <= 0) {
        this.invalidStartDate = true;
        isValid = false;
      }

      return isValid;
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

input.error {
  border-color: red;
}

div.error {
  background-color: pink;
  color: red;
}

label span {
  float: right;
  font-weight: normal;
  color: #aaa;
}
</style>
