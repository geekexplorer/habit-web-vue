<template>
  <div class="container">
    <header>
      <h2>{{ title }}</h2>
    </header>
    <form class="habit-form" @submit.prevent="processForm">
      <div class="form-div">
        <label for="name">Name</label>
        <input
          :class="invalidName && 'error'"
          type="text"
          name="name"
          id="name"
          ref="nameInput"
          v-model="enteredName"
        />
        <div v-if="invalidName" class="error">You must enter a habit name.</div>
      </div>
      <div class="form-div">
        <label for="startDate">Start Date</label>
        <input :class="invalidStartDate && 'error'" type="date" :value="enteredStartDate" ref="startDateInput" />
        <div v-if="invalidStartDate" class="error">You must enter a valid start date.</div>
      </div>
      <div class="form-div">
        <label for="duration"
          >Duration <span>{{ enteredDuration }} days</span></label
        >
        <input type="range" v-model="enteredDuration" min="7" max="31" />
      </div>
      <base-actions>
        <base-button @click="close" buttonStyle="back">Back</base-button>
        <base-button type="submit"> {{ habit ? 'Update' : 'Create' }}</base-button>
      </base-actions>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
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
      enteredStartDate:
        this.habit?.startDate.substring(0, 10) ||
        new Date(new Date().toLocaleDateString()).toISOString().substring(0, 10),
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
        id: this.habit?.id,
      });
    },
    validateForm(name, startDate) {
      let isValid = true;
      if (name.length <= 0) {
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
.container {
  padding: 2rem;
}

header {
  text-align: center;
  padding-bottom: 1rem;
  width: fit-content;
  margin: auto;
}

header > h2 {
  background-color: var(--title-color);
  padding: 0.25rem 1rem;
  border-radius: var(--div-border-radius);
  font-weight: bold;
  box-shadow: 2px 8px 4px -6px var(--box-shadow-color);
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
  font-size: 1.25rem;
  width: 100%;
  padding-bottom: 0.25rem;
}

input {
  border-bottom: 1px solid #999;
  border-radius: var(--div-border-radius);
  width: 100%;
  font-size: 1.1rem;
}

input[type='range'] {
  padding: -5px;
}

input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  height: 1rem;
  border: 1px solid #999;
  border-radius: var(--div-border-radius);
  background-repeat: no-repeat;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--thumb-color);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

div.error {
  padding: 0.1rem;
  font-size: 0.8rem;
  color: red;
  font-family: 'Roboto', sans-serif;
}

input.error {
  background-color: pink;
}

label span {
  position: relative;
  float: right;
  top: 0.65rem;
  right: 0.1rem;
  font-size: 0.8rem;
  font-weight: normal;
  color: #aaa;
}
</style>
